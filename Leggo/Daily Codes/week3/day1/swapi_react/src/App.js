import React from 'react';
import axionsInstance from './helpers/axiosInstance';

class App extends React.Component {
  state = {movies: []};

  fetchMovies = () =>
    axionsInstance('films/')
      .then((response) => response.data.results)
      .then((moviesData) => this.setState({movies: moviesData}));

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h1>Star Wars API</h1>
        {this.state.movies.map((movie) => (
          <p key={movie.episode_id}>{movie.title}</p>
        ))}
      </div>
    );
  }
}

export default App;
