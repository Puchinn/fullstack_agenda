import axios from 'axios'

const url = '/api/agenda'

const getData = () => {
  const res = axios.get(url)
  return res.then((r) => r.data)
}

const createData = (data) => {
  const res = axios.post(url, data)
  return res.then((r) => r.data)
}

const deleteData = (id) => {
  return axios.delete(`${url}/${id}`)
}

const updateData = (id, data) => {
  const res = axios.put(`${url}/${id}`, data)
  return res.then((r) => r.data)
}

export { getData, createData, deleteData, updateData }
