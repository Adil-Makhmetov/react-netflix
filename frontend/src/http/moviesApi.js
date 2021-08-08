import instance from "./instance";

export default {
  getMovie: (id, params = {}) => {
    return instance.get(`movies/find/${id}`, { params });
  },
  getRandom: (params = {}) => {
    return instance.get('movies/random', { params })
  }
}