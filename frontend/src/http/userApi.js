import instance from "./instance";
import {logout} from "../redux/userSlice";

export default {
  register: async (username, email, password, dispatch) => {
    try {
      await instance.post('auth/register', {username, email, password});
    } catch (e) { console.log(e) }
  },

  logout: (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logout());
  }
}