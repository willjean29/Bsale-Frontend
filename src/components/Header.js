const Header = {
  render: () => {
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
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
          </form>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
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
  after_render: () => {},
};
export default Header;
