const cartTotal = (basket) => {
  return basket.reduce((amount, item) => {
    return item.price * item.quantity + amount;
  }, 0);
};

const convertTotalToStripe = (total) => {
  return total * 100;
};

module.exports = {
  cartTotal,
  convertTotalToStripe,
};
