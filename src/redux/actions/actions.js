export const addToCart = (product) => {
  return {
    type: "addToCart",
    payload: product,
  };
};

export const deleteToCart = (product) => {
  return {
    type: "deleteToCart",
    payload: product,
  };
};

export const qtyIncrease = (product) => {
  return {
    type: "qtyIncrease",
    payload: product,
  };
};

export const qtyDiscount = (product) => {
  return {
    type: "qtyDiscount",
    payload: product,
  };
};
