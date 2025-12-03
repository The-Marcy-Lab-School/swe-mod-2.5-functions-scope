const calculatePrice = (basePrice) => {
  const tax = basePrice * 0.08;
  basePrice + tax;
}

const total = calculatePrice(100);
console.log(total);
console.log(tax);
