import { getCategories } from "../api";
import { parseRequestUrl } from "../utils";
const Aside = {
  render: async () => {
    const { params } = parseRequestUrl();
    const {
      data: { categories },
      message,
    } = await getCategories();
    return `
      <h5>Categories</h5>
    ${categories
      .map(
        (category) => `
        <li class="list-group-item category-name ${params.category ? (params.category == category.name ? "active" : "") : ""}">
          <a href="/#/?category=${category.name}">${category.name}</a>
        </li>
      `
      )
      .join("\n")}
    `;
  },
  after_render: async () => {},
};

export default Aside;
