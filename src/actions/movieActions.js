import axios from "axios";
import { GET_ERRORS, GET_MOVIES, GET_MOVIE, VOTE_MOVIE } from "./types";

export const getMovies = () => async dispatch => {
  const res = await axios.get("/movies");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const suggestMovie = (movie, history) => async dispatch => {
  try {
    const res = await axios.post("/movies", movie);
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMovie = (id, history) => async dispatch => {
  const res = await axios.get(`/movies/${id}`);
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};

export const voteMovie = (id, history) => async dispatch => {
  const res = await axios.get(`/movies/vote/${id}`);
  dispatch({
    type: VOTE_MOVIE,
    payload: id
  });
};
