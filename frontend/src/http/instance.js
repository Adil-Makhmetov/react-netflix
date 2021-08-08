import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
    authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.accessToken}` || null,
  },
})