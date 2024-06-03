export const applyDiscount = (item) => {
  const discount = Math.floor(Math.random() * 31) + 10;
  const discountedPrice = item.price - item.price * (discount / 100);
  return { ...item, discount, discountedPrice: discountedPrice.toFixed(2) };
};
