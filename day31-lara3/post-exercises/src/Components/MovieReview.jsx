import React from "react";
import MovieFavorite from "./MovieFavorite.jsx";

export default class MovieReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_data: null,
      text: ""
    };
    this.movie_id = 2;
  }

  componentDidMount = () => {
    fetch(`http://www.laravel.test/api/movie?id=${this.movie_id}`)
      .then(response => response.json())
      .then(json_data => {
        this.setState({ movie_data: json_data });
      });
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://www.laravel.test/api/review", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        movie_id: this.movie_id,
        user_id: 1,
        text: this.state.text,
        rating: 6
      })
    });
  };

  render() {
    let movie = <h1>Loading...</h1>;
    if (this.state.movie_data !== null) {
      movie = (
        <div className='movie'>
          <h2>{this.state.movie_data.name}</h2>
          <img
            className='movieImg'
            src={this.state.movie_data.poster_url}
            alt={this.state.movie_data.name}
            />

        </div>
      );
    }

    return (
      <div className='form'>
        {movie}
        <form action='' method='post' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            id=''
            onChange={this.handleTextChange}
          />
          <input type='submit' value='Submit' />
        </form>
        <MovieFavorite
            movie_id= {this.movie_id}
            />
      </div>
    );
  }
}
