import { getProducts } from "../api";
import { parseRequestUrl } from "../utils";

const HomeScreen = {
  render: async () => {
    const {
      params: { page, category, search },
    } = parseRequestUrl();
    const {
      data: { products, pages },
    } = await getProducts(page, category, search);
    console.log({ pages });
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
            <a href="/store" class="btn-store">
              <i class="fa fa-store"></i>
            </a>
          </div>
        </div>
      `
        )
        .join("\n")}
    `;
  },
};
export default HomeScreen;
