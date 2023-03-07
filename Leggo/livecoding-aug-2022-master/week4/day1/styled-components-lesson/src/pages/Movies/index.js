import { useEffect, useState } from "react";
import { Container } from "../../styles/Container.styles";
import MovieCard from "../../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const BASE_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=24c6c37bd99b4a474d4ed4cdaf8f02b6&language=en-US&page=1";

  useEffect(() => {
    const fetchMovies = () => {
      fetch(BASE_URL)
        .then(resp => resp.json())
        .then(data => setMovies(data.results));
    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <Container>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};
export default Movies;
