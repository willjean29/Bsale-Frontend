import { getProducts } from "../api";
import { parseRequestUrl } from "../utils";

const Pagination = {
  render: async () => {
    const { value } = parseRequestUrl();
    console.log({ value });
    const {
      data: { pages, page },
      message,
    } = await getProducts(value);
    console.log({ page });
    return `
    <nav class="text-center mt-2" >
    <ul class="pagination pagination-md my-0">
      ${Array.from({ length: pages }, (v, i) => i)
        .map(
          (p) =>
            `
        <li class="page-item ${value == p + 1 && "active"}"><a class="page-link" href="#/?page=${p + 1}">${p + 1}</a></li>
      `
        )
        .join("")}
        </ul>
    </nav>
    `;
  },
};

export default Pagination;
