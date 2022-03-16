const Error404Screen = {
  render: () => {
    const container = document.getElementById("products__content");
    container.classList.add("products__content-error");
    return `
    <div class="error-page">Products not Found!
      <p>
        <i class="fa fa-face-tired"></i>
      </p>
    </div>`;
  },
};
export default Error404Screen;
