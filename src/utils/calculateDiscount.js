export const calculateDiscount = ({ price, discount }) => {
  return Math.round(price - (price * discount) / 100);
};
