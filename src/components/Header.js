import { parseRequestUrl } from "../utils";
const Header = {
  render: () => {
    const { params } = parseRequestUrl();
    const value = params.search || "";
    return ` 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Bsale Store</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <form class="d-flex" id="form-search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="product-name" value=${value}>
            <button class="btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
          </form>
          <li class="nav-item">
            <a class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="fa fa-store"></i>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 `;
  },
  after_render: () => {
    const form = document.getElementById("form-search");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("product-name");
        location.href = `?search=${input.value}`;
      });
    }
  },
};
export default Header;
