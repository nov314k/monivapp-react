import React, { Component } from "react";

class MovieBox extends Component {
  render() {
    const { project } = this.props;
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
              <h3>{project.projectName}</h3>
              <p>
                In ancient Maori times, an undead warrior and a young
                tribeswoman team up to find a way to stop the evil dead from
                rising.
              </p>
            </div>

            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <li className="list-group-item board">
                  <span className="fa fa-flag-checkered pr-1">Votes: 12</span>
                </li>
                <a href="#">
                  <li className="list-group-item board">
                    <span className="fa fa-flag-checkered pr-1">
                      Vote for this movie
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieBox;
