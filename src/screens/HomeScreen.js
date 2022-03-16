import { getProducts, getProductById } from "../api";
import Error404Screen from "./Error404Screen";
import { parseRequestUrl } from "../utils";
import { getCartItems, setCartItems } from "../localStore";
import { ItemCart } from "../components";
const HomeScreen = {
  render: async () => {
    const {
      params: { page, category, search },
    } = parseRequestUrl();
    const {
      data: { products, pages },
    } = await getProducts(page, category, search);
    console.log(products);
    if (products.length === 0) return Error404Screen.render();
    return `
      ${products
        .map(
          (product) => `
          <div class="card">
          <img src=${
            product.url_image ? product.url_image : "https://westerrands.websites.co.in/e-store/img/defaults/product-default.png"
          } class="img-thumbnail" alt=${product.name} />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">$ ${product.price}</small>
            <a class="btn-store" type="button" id="btn-store-item" data-id=${product.id}>
              <i class="fa fa-store" data-id=${product.id}></i>
            </a>
          </div>
        </div>
      `
        )
        .join("\n")}
    `;
  },
  after_render: async () => {
    const items = Array.from(document.querySelectorAll("#btn-store-item"));
    items.map((item) => {
      item.addEventListener("click", async (event) => {
        const id = event.target.dataset.id;
        const {
          data: { product },
        } = await getProductById(id);
        const cartProducts = getCartItems();

        // validate is exists
        const item = cartProducts.findIndex((item) => item.id == id);
        item !== -1 ? (cartProducts[item].qty += 1) : cartProducts.push({ ...product, qty: 1 });

        setCartItems(cartProducts);
        const listCart = document.getElementById("list-cart");
        if (listCart) {
          listCart.innerHTML = ItemCart.render();
          ItemCart.after_render();
        }

        Toastify({
          text: "Product Added Successfully",
          duration: 1500,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#198754",
          },
        }).showToast();
      });
    });
  },
};
export default HomeScreen;
