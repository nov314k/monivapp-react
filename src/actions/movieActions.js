import axios from "axios";
import { GET_ERRORS, GET_MOVIES, GET_MOVIE } from "./types";

export const getMovies = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/rest/movies");
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const suggestMovie = (movie, history) => async dispatch => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

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

export const voteForAMovie = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/rest/movies/vote/${id}`);
};

export const getMovie = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/rest/movies/${id}`);
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};