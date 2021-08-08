import instance from "../instance";
import {
  createMovieFailure,
  createMovieStart, createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess
} from "./MovieActions";

export default {
  getMovies: async (dispatch) => {
    dispatch(getMoviesStart());
    try {
      const res = await instance.get('movies');
      dispatch(getMoviesSuccess(res.data));
    } catch (e) {
      dispatch(getMoviesFailure());
    }
  },
  deleteMovie: async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
      await instance.delete(`movies/${id}`);
      dispatch(deleteMovieSuccess(id));
    } catch (e) {
      dispatch(deleteMovieFailure());
    }
  },
  createMovie: async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await instance.post(`movies/`, movie);
      dispatch(createMovieSuccess(res.data));
    } catch (e) {
      dispatch(createMovieFailure());
    }
  },
}