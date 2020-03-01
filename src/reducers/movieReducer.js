import { GET_MOVIES, GET_MOVIE, VOTE_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  movie: {}
};

var voteAndSort = function(movies, id) {
  for (const movie of movies) {
    if (movie.id === id) {
      movie.votes++;
    }
  }
  return movies.sort(function(a, b) {
    return b.votes - a.votes;
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case VOTE_MOVIE:
      return {
        ...state,
        movies: voteAndSort(state.movies, action.payload)
      };
    default:
      return state;
  }
}
