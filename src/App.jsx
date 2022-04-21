import React, { Component } from "react";
import Nav from "./Nav";
import { choices } from "./choices";
import { urls } from "./urls";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      url: ""
    };
    this.handleMovies = this.handleMovies.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
    this.handleBooks = this.handleBooks.bind(this);
  }

  handleMovies = () => {
    this.setState((state) => ({
      selected: "movie",
      url: urls.movie_url
    }));
  };

  handleMusic = () => {
    this.setState((state) => ({
      selected: "music",
      url: urls.music_url
    }));
  };

  handleBooks = () => {
    this.setState((state) => ({
      selected: "book",
      url: urls.book_url
    }));
  };

  render() {
    const movies = choices.map((choice) =>
      choice.category === "movie" ? <li>{choice.genre}</li> : ""
    );

    const music = choices.map((choice) =>
      choice.category === "music" ? <li>{choice.genre}</li> : ""
    );

    const books = choices.map((choice) =>
      choice.category === "book" ? <li>{choice.genre}</li> : ""
    );

    return (
      <div className="App">
        <Nav
          onMoviesClick={this.handleMovies}
          onMusicClick={this.handleMusic}
          onBooksClick={this.handleBooks}
        />
        <nav>
          {this.state.selected === "movie" ? (
            <li className="sub">{movies}</li>
          ) : this.state.selected === "music" ? (
            <li className="sub">{music}</li>
          ) : this.state.selected === "book" ? (
            <li className="sub">{books}</li>
          ) : (
            <li></li>
          )}
        </nav>
        <div>
          {this.state.url !== "" && (
            <img className="picture" alt="movie" src={this.state.url} />
          )}
        </div>
      </div>
    );
  }
}
