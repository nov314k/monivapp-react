import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { voteForAMovie } from "../../actions/movieActions";

class MovieBox extends Component {
  constructor() {
    super();

    this.state = {
      errors: {}
    };

    this.voteForThisMovie = this.voteForThisMovie.bind(this);
  }

  voteForThisMovie(e) {
    e.preventDefault();
    this.props.voteForAMovie(null, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { movie } = this.props;
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
              <span
                onClick={this.voteForThisMovie}
                className="btn btn-md btn-info text-center"
              >
                {" "}
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
  voteForAMovie: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { voteForAMovie })(MovieBox);
