import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import MovieBox from "./Movie/MovieBox";
import SuggestAMovieButton from "./Movie/SuggestAMovieButton";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movie;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SuggestAMovieButton />
              <br />
              <hr />
              {movies.map(movie => (
                <MovieBox key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovies })(Dashboard);
