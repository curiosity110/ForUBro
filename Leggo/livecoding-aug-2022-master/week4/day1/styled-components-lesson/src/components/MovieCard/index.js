import { MovieContainer, Details, ButtonContainer } from "./MovieCard.styles";

const MovieCard = ({ poster_path, title, release_date, ...movie }) => {
  return (
    <MovieContainer>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />

      <Details>
        <h2>{title}</h2>
        <ButtonContainer>
          <p>{release_date}</p>
          <button>Details</button>
        </ButtonContainer>
      </Details>
    </MovieContainer>
  );
};
export default MovieCard;
