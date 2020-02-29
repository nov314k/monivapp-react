import React, { Component } from "react";
import MovieBox from "./Movie/MovieBox";
import SuggestAMovieButton from "./Movie/SuggestAMovieButton";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SuggestAMovieButton />
              <br />
              <hr />
              {projects.map(project => (
                <MovieBox key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getMovies })(Dashboard);
