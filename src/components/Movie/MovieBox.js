import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { voteMovie } from "../../actions/movieActions";

class MovieBox extends Component {
  onVoteMovieClick = id => {
    this.props.voteMovie(id);
  };

  render() {
    const movie = this.props.movie;
    return (
      <div className="container">
        <div class="card mb-3">
          <h5 class="card-header text-center">
            {movie.votes}{" "}
            <span class="text-muted text-monospace font-italic">VOTES</span>
          </h5>
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">
              A programmer is brought back to reason and reality when learning
              he was living in a program created by gigantic machines which make
              human birth artificial. In order to set humanity free, Neo will
              have to face many enemies by using technologies and self-trust.
            </p>
            <div class="text-left">
              <span
                class="btn btn-sm btn-info text-center"
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
