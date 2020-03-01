import React, { Component } from "react";
import classnames from "classnames";
import {
  getMovie,
  suggestMovie,
  voteForAMovie
} from "../../actions/movieActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class VoteForAMovieForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      votes: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const { id, title, votes } = nextProps.movie;
    this.setState({
      id,
      title,
      votes
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const voteForAMovie = {
      id: this.state.id,
      title: this.state.title,
      votes: this.state.votes + 1
    };
    this.props.suggestMovie(voteForAMovie, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-6 text-center">Vote for Movie</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Movie title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                      disabled
                    />
                  </div>
                  <h5 className="display-6 text-center">Current Votes</h5>
                  <hr />
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Current number of votes"
                      name="votes"
                      value={this.state.votes}
                      disabled
                    />
                  </div>
                  <input
                    type="submit"
                    value="Confirm"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VoteForAMovieForm.propTypes = {
  getMovie: PropTypes.func.isRequired,
  suggestMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(mapStateToProps, { getMovie, suggestMovie })(
  VoteForAMovieForm
);
