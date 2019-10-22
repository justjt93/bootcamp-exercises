import React from "react";

export default class MovieOfTheWeek extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loaded: false,
      data: []
    };

    this.url = "http://www.laravel.test/api/movieweek";
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.url) {
      this.setState({
        loading: true,
        loaded: false,
        data: []
      });

      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            loaded: true,
            data: data
          });
        })
        .finally(
          this.setState({
            loading: false
          })
        );
    }
  }

  render() {
    let content = (
      <div className='message'>
        <div className='loader'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        Loading
      </div>
    );
    if (!this.state.loading && this.state.loaded) {

      content = (
        <>
          <div className='movie'>
            <img src={this.state.data.movie[0].poster_url} class="imgmovie" alt='Avengers' />

            <div>
              <h3>{this.state.data.movie[0].name}</h3>

              <div className='year'>{this.state.data.movie[0].year}</div>

              <div className='genres'>
                {this.state.data.genres.map(item => (
                  <span>{item.name}</span>
                ))}
              </div>

              <div className='starring'>
                <h4>Starring:</h4>

                <div>
                  {this.state.data.actors.map(item => (
                    <span>{item.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <section className='weekly-movie'>
        <h2>Movie of the week</h2>

        {content}
      </section>
    );
  }
}
