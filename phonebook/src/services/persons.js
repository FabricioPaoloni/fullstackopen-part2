import axios from "axios";

const baseURL = "http://localhost:3001/api/persons"

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const createPerson = (newPerson) => {
    return axios.post(baseURL, newPerson).then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseURL}/${id}`).then(response => response.data)
}

const updatePerson = (id, newData) => {
    return axios.put(`${baseURL}/${id}`, newData).then(response => response.data)
}

export default { getAll, createPerson, deletePerson, updatePerson }
