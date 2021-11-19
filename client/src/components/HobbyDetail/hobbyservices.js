export const riskScouter = num => {
  if (num === 1) {
    return "Safe"
  } else if (num === 2) {
    return "Kind of Safe"
  } else if (num === 3) {
    return "Median Safe/Dangerous"
  } else if (num === 4) {
    return "Kind of Dangerous"
  } else if (num === 5) {
    return "Dangerous"
  } else if (num === 9001) {
    return "IT'S OVER 9000!!!"
  } 
} 