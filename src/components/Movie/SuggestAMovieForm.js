import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { suggestMovie } from "../../actions/movieActions";

class SuggestAMovieForm extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: this.state.title
    };
    this.props.suggestMovie(newMovie, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-6 text-center">
                  Suggest a movie to watch
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        is_invalid: errors.title
                      })}
                      placeholder="Enter movie title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                    <p>{errors.title}</p>
                  </div>
                  <div class="text-center">
                    <input type="submit" className="btn btn-sm btn-info" />
                  </div>
                </form>
                <p class="text-center mt-3">
                  <a href="/">Back to movies list</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SuggestAMovieForm.propTypes = {
  suggestMovie: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { suggestMovie })(SuggestAMovieForm);
