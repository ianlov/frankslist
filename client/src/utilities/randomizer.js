/*
  Randomizer Pseudo -- Get "n" random elements from an array
  parameters = "n" elements, arr
  Get random element, slice element from array, repeat n times
*/



const randomizer = (n, arr) => {
  const random = [];
  for (let i = n; i > 0; i--) {
    let randInd = Math.floor(Math.random() * arr.length);
    random.push(arr[randInd])
    arr.splice(randInd, 1)
  }
  return random
}

export default randomizer;