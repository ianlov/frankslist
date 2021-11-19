const handleRisk = (risk) => {
  let message = "";
  switch (risk) {
    case 1:
      message = "No Risk";
      break;
    case 2:
      message = "Little Risk";
      break;
    case 3:
      message = "Moderate Risk";
      break;
    case 4:
      message = "Risky";
      break;
    case 5:
      message = "Dangerous";
      break;
    default:
      message = "N/A"
      break;
  }
  return message
}

export default handleRisk;