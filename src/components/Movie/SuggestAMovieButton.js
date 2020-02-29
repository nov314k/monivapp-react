import React from "react";
import { Link } from "react-router-dom";

const SuggestAMovieButton = () => {
  return (
    <React.Fragment>
      <Link to="/suggestMovie" className="btn btn-lg btn-info">
        Suggest a movie to watch
      </Link>
    </React.Fragment>
  );
};

export default SuggestAMovieButton;
