const cart = [];
const productReducer = (state = cart, action) => {
  const product = action.payload;
  const exist = state.find((x) => x.id === product.id);
  switch (action.type) {
    case "addToCart":
      if (!exist) {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      return state;

    case "deleteToCart":
      return state.filter((x) => x.id !== exist.id);
    case "qtyDiscount":
      if (exist.qty !== 1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      return state;

    case "qtyIncrease":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );

    default:
      return state;
  }
};

export default productReducer;
