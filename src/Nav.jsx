import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    const { onMoviesClick, onMusicClick, onBooksClick } = this.props;

    return (
      <>
        <div className="banner">
          <h1>Stargrazer</h1>
          <p className="slogan">
            your online selection of movies, music, and literature
          </p>
        </div>
        <nav className="main">
          <li onClick={onMoviesClick}>Movies</li>
          <li onClick={onMusicClick}>Music</li>
          <li onClick={onBooksClick}>Books</li>
        </nav>
      </>
    );
  }
}
