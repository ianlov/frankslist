import api from './apiConfig'

export const getHobbies = async () => {
  try {
      const response = await api.get('/hobbies')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getHobby = async id => {
  try {
      const response = await api.get(`/hobbies/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createHobby = async hobby => {
  try {
      const response = await api.post('/hobbies', hobby)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateHobby = async (id, hobby) => {
  try {
      const response = await api.put(`/hobbies/${id}`, hobby)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteHobby = async id => {
  try {
      const response = await api.delete(`/hobbies/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}