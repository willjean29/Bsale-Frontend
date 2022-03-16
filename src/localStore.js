/**
 * GET CART ITEMS
 * @returns {Array}  Product list to show in shopping cart
 */
export const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  return cartItems;
};

/**
 * SET CART ITEMS
 * @param {Array} cartItems Product list to save
 * @returns {void}
 */
export const setCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

/**
 * CLEAR CART
 * @returns {void}
 */
export const cleanCart = () => {
  localStorage.removeItem("cartItems");
};
