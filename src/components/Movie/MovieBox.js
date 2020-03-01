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
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">
                <img src="logo192.png" />
              </span>
            </div>

            <div className="col-lg-6 col-md-4 col-8">
              <h3>{movie.title}</h3>
              <p>
                In ancient Maori times, an undead warrior and a young
                tribeswoman team up to find a way to stop the evil dead from
                rising.
              </p>
            </div>

            <div className="col-md-4 d-none d-lg-block">
              <span className="">Votes: {movie.votes}</span>
              <br />
              <span className="btn btn-md btn-info text-center">
                {" "}
                Vote for this movie
              </span>
              <br />
              <Link
                to={`/voteMovie/${movie.id}`}
                className="btn btn-md btn-info text-center mt-2"
              >
                {" "}
                Vote via update form
              </Link>
              <br />
              <span
                className="btn btn-md btn-info text-center mt-2"
                onClick={this.onVoteMovieClick.bind(this, movie.id)}
              >
                {" "}
                Vote
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
