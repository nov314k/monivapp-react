import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { voteMovie } from "../../actions/movieActions";

class MovieBox extends Component {
  onVoteMovieClick = id => {
    this.props.voteMovie(id);
  };

  render() {
    const movie = this.props.movie;
    return (
      <div className="container">
        <div className="card mb-3">
          <h5 className="card-header text-center">
            {movie.votes}{" "}
            <span className="text-muted text-monospace font-italic">VOTES</span>
          </h5>
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
              A programmer is brought back to reason and reality when learning
              he was living in a program created by gigantic machines which make
              human birth artificial. In order to set humanity free, Neo will
              have to face many enemies by using technologies and self-trust.
            </p>
            <div className="text-left">
              <span
                className="btn btn-sm btn-info text-center"
                onClick={this.onVoteMovieClick.bind(this, movie.id)}
              >
                Vote for this movie
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieBox.propTypes = {
  voteMovie: PropTypes.func.isRequired
};

export default connect(null, { voteMovie })(MovieBox);
