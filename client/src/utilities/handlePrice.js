const handlePrice = (price) => {
  if (price < 20) {
    return "$";
  } else if (price >= 20 && price < 100) {
    return "$$";
  } else if (price >= 100 && price < 5000) {
    return "$$$";
  } else {
    return "$$$$";
  }
}

export default handlePrice;