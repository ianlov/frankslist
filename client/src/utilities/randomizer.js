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

console.log(randomizer(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))