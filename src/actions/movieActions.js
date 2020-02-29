import axios from "axios";
import { GET_ERRORS, GET_MOVIES } from "./types";

export const getMovies = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/rest/movies");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const suggestMovie = (movie, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/rest/movies", movie);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const voteForAMovie = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/rest/movies/vote/1");
};
