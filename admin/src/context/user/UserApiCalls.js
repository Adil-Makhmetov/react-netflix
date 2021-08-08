import instance from "../instance";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess
} from "./UserActions";

export default {
  getUsers: async (dispatch, params = {}) => {
    dispatch(getUsersStart());
    try {
      const res = await instance.get('users', { params });
      dispatch(getUsersSuccess(res.data));
    }
    catch (e) { dispatch(getUsersFailure()); }
  },

  deleteUser: async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
      await instance.delete(`users/${id}`);
      dispatch(deleteUserSuccess(id));
    }
    catch (e) { dispatch(deleteUserFailure()); }
  },

  getStats: (params = {}) => {
    return instance.get('users/stats', { params });
  },
}