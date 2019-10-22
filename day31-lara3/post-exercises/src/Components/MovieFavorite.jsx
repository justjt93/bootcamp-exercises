import React from "react";

export default class MovieReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: null,
    };
  }

  componentDidMount = () => {
    fetch(
      `http://www.laravel.test/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`
    )
      .then(response => response.json())
      .then(json_data => {
        this.setState({ favorite: json_data.favorite });
      });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://www.laravel.test/api/movies/favorite/toggle", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        movie_id: this.props.movie_id,
        user_id: 1,
      })
    }).then(response => response.json())
    .then(json_data => {
      this.setState({ favorite: json_data.data.favorite });
    });

    

  };

  render() {

    let text = undefined;
    let text2 = undefined;

    if (this.state.favorite === true) {
        text = <h2>This is your favorite movie</h2>;
        text2= 'No longer my favorite movie';
        
    } else {
        text = <h2>This is not your favorite movie</h2>;
        text2= 'Make this your favorite movie';
    }
return (
    <>
    <br/>
    <form action='' method='post' onSubmit={this.handleSubmit}>
        <p>{text}</p>
        <br/>
        <input type='submit' value={text2} />     
    </form>
    </>
)
  }
}
