import { getProducts } from "../api";
import { parseRequestUrl } from "../utils";

const Pagination = {
  render: async () => {
    const { params } = parseRequestUrl();

    const {
      data: { pages, page },
      message,
    } = await getProducts(params.page, params.category, params.search);

    if (pages == 1) return "";
    return `
    <nav class="text-center mt-2" >
    <ul class="pagination pagination-md my-0">
      ${Array.from({ length: pages }, (v, i) => i)
        .map(
          (p) =>
            `
        <li class="page-item ${
          params.page ? (params.page == p + 1 ? "active" : "") : p + 1 === 1 ? "active" : ""
        }"><a class="page-link" href="/#/?page=${p + 1}${params.category ? "&category=" + params.category : ""}${
              params.search ? "&search=" + params.search : ""
            }">${p + 1}</a></li>
      `
        )
        .join("")}
        </ul>
    </nav>
    `;
  },
};

export default Pagination;
