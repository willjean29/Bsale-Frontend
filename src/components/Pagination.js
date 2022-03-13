import { getProducts } from "../api";

const Pagination = {
  render: async () => {
    const {
      data: { products, pages, page },
      message,
    } = await getProducts();
    return `
    <nav class="text-center mt-2" >
    <ul class="pagination pagination-md my-0">
      ${Array.from({ length: pages }, (v, i) => i)
        .map(
          (page) =>
            `
        <li class="page-item"><a class="page-link" href="#/?page=${page + 1}">${page + 1}</a></li>
      `
        )
        .join("")}
        </ul>
    </nav>
    `;
  },
};

export default Pagination;
