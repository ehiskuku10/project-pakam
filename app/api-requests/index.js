import axios from 'axios'
import { SERVER_URI } from '../env'

export const createUser = async (body) => {
  return axios
    .post(`${SERVER_URI}/user`, body)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    })
}

export const getUsers = async () => {
  return axios
    .get(`${SERVER_URI}/user`, {
      headers: {
        'Authorization': localStorage.token ? `${localStorage.token}` : null,
      }
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    })
}

export const updateUser = async (body, id) => {
  return axios
    .put(`${SERVER_URI}/user/${id}`, body, {
      headers: {
        'Authorization': localStorage.token ? `${localStorage.token}` : null,
      }
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    })
}

export const deleteUser = async (id) => {
  return axios
    .delete(`${SERVER_URI}/user/${id}`, {
      headers: {
        'Authorization': localStorage.token ? `${localStorage.token}` : null,
      }
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    })
}

export const login = async (body) => {
  return axios
    .post(`${SERVER_URI}/user/login`, body)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error.response.data
    })
}