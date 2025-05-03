import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { fetchMovieById } from "../../redux/thunks/fetchMovieById";
import { selectSelectedMovie, selectSelectedMovieError, selectSelectedMovieLoading } from "../../redux/slices/selectedMovieSlice";
import { LikeButton } from "../../components/LikeButton/LikeButton";
import "./MoviePage.css";

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector(selectSelectedMovie);
  const loading = useSelector(selectSelectedMovieLoading);
  const error = useSelector(selectSelectedMovieError);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(Number(id)));
    }
  }, [id]);

  if (loading) return <div className="container">Загрузка...</div>;
  if (error || !movie) return <div className="container">Фильм не найден</div>;

  return (
    <div className="movie-page container">
      {movie.poster?.url && (
        <img
          src={movie.poster.url}
          alt={movie.name ?? "Постер"}
          className="movie-page__image"
        />
      )}
      <div className="movie-page__info">
        <h1 className="movie-page__title">{movie.name}</h1>
        <p className="movie-page__year">{movie.year}</p>
        {movie.genres && (
          <p className="movie-page__genres">
            Жанры: {movie.genres.map((g) => g.name).join(", ")}
          </p>
        )}
        <p className="movie-page__description">{movie.description}</p>
        {movie && <LikeButton movie={movie} className="movie-page__like-button" />}
      </div>
    </div>
  );
};

export default MoviePage;