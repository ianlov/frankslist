import Hobby from '../models/hobby.js'

export const getHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.find()
    res.json(hobbies)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getHobby = async (req, res) => {
  try {
    const { id } = req.params
    const hobby = await Hobby.findById(id)
    if (hobby) {
      return res.json(hobby)
    }
    res.status(404).json({ message: 'Hobby not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createHobby = async (req, res) => {
  try {
    const hobby = new Hobby(req.body)
    await hobby.save()
    res.status(201).json(hobby)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateHobby = async (req, res) => {
  const { id } = req.params
  const hobby = await Hobby.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(hobby)
}

export const deleteHobby = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Hobby.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Hobby deleted')
    }
    throw new Error('Hobby not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
