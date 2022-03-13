import { getProducts } from "../api";
import { parseRequestUrl } from "../utils";

const HomeScreen = {
  render: async () => {
    // const { value } = parseRequestUrl();
    const {
      data: { products },
      message,
    } = await getProducts();
    console.log(products);
    return `
      ${products
        .map(
          (product) => `
          <div class="card">
          <img src="https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg" class="img-thumbnail" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pisco Alto</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">$ 3900.00</small>
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
