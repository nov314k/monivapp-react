import React from "react";
import { Link } from "react-router-dom";

const SuggestAMovieButton = () => {
  return (
    <React.Fragment>
      <div className="text-right">
        <Link to="/suggestMovie" className="btn btn-info btn-sm">
          Suggest a movie to watch
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SuggestAMovieButton;
