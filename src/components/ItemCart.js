import { getCartItems } from "../localStore";
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
            <a class="btn btn-danger" type="button">
              <i class="fa fa-trash"></i>
            </a>
          </div>
        </li>
      `
        )
        .join("\n")}
    `;
  },
};

export default ItemCart;
