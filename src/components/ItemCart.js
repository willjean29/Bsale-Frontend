import { getCartItems, setCartItems } from "../localStore";

const ItemCart = {
  render: () => {
    const items = getCartItems();
    if (items.length === 0) {
      return `
      <li class="list-group-item item-cart__empty text-center">
        <p>Cart is Empty</p>
        <i class="fa fa-store"></i>
      </li>
      `;
    }
    return `
      ${items
        .map(
          (item) => `
        <li class="list-group-item item-cart">
          <div class="item-cart__image">
            <img src=${item.url_image} alt=${item.name} class="img-thumbnail" />
          </div>
          <div class="item-cart__properties">
            <p><strong>Name</strong>: ${item.name}</p>
            <p class="item-name"><strong>Category</strong>: ${item.categoryFull.name}</p>
            <p><strong>Price</strong>: $ ${item.price}</p>
            <p><strong>Qty</strong>: ${item.qty}</p>
          </div>
          <div class="item-cart__actions">
            <a class="btn btn-danger" type="button" data-id=${item.id} id="item-btn-delete">
              <i class="fa fa-trash" data-id=${item.id}></i>
            </a>
          </div>
        </li>
      `
        )
        .join("\n")}
    `;
  },
  after_render: () => {
    const items = Array.from(document.querySelectorAll("#item-btn-delete"));
    items.map((item) => {
      // EVENT TO ADD PRODUCT IN SHOPPING CART
      item.addEventListener("click", async (event) => {
        const id = event.target.dataset.id;
        const cartProducts = getCartItems();
        const shoppingCart = cartProducts.filter((item) => item.id !== Number(id));
        console.log(shoppingCart);
        setCartItems(shoppingCart);

        const listCart = document.getElementById("list-cart");
        if (listCart) {
          listCart.innerHTML = ItemCart.render();
          ItemCart.after_render();
        }

        Toastify({
          text: "Product Removed Successfully",
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

export default ItemCart;
