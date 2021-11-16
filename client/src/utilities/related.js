import randomizer from "./randomizer.js"

const related = (hobbyDetail, hobbies) => {
  let related = hobbies.filter((hobby) => {
    return (
      ( hobby.indoors === hobbyDetail.indoors ||
      Math.floor(hobby.risk) === Math.floor(hobbyDetail.risk) ) &&
      hobby.name !== hobbyDetail.name
    )
  })
  console.log(related)
  related = randomizer(3, related)
  return related
}

export default related;