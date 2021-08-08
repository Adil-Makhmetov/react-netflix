import instance from "./instance";

export default {
  getLists: (params = {}) => {
    return instance.get('lists', { params });
  },
}