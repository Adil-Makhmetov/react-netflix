import instance from "../instance";
import {
  createListFailure,
  createListStart, createListSuccess,
  deleteListFailure,
  deleteListStart, deleteListSuccess,
  getListsFailure,
  getListsStart, getListsSuccess
} from "./ListActions";

export default {
  getLists: async (dispatch, params) => {
    dispatch(getListsStart());
    try {
      const res = await instance.get('lists', { params });
      dispatch(getListsSuccess(res.data));
    } catch (e) {
      dispatch(getListsFailure());
    }
  },
  deleteList: async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
      await instance.delete(`lists/${id}`);
      dispatch(deleteListSuccess(id));
    } catch (e) {
      dispatch(deleteListFailure());
    }
  },
  createList: async (list, dispatch) => {
    dispatch(createListStart());
    try {
      const res = await instance.post(`lists`, list);
      dispatch(createListSuccess(res.data));
    } catch (e) {
      dispatch(createListFailure());
    }
  },
}