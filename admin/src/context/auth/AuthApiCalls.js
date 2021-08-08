import instance from "../instance";
import {loginFailure, loginStart, loginSuccess, logout} from "./AuthActions";

export default {
  login: async (user, dispatch) => {
    dispatch(loginStart());
    try {
      const res = await instance.post('auth/login', user);
      res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (e) {
      dispatch(loginFailure());
    }
  },

  logout: (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logout());
  }
}