import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Movie } from "../../types/movie";
import { addFavorite, removeFavorite, selectFavorites } from "../../redux/slices/favoritesSlice";
import "./MovieCard.css";

type MovieCardProps = {
  movie: Movie;
  isFavoritePage?: boolean;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavoritePage = false }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isLiked = favorites.some((fav: Movie) => fav.id === movie.id);

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-card">
      {movie.poster?.url && (
        <img
          src={movie.poster.url}
          alt={movie.name}
          className="movie-card__image"
        />
      )}
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.name}</h3>
        <p className="movie-card__year">{movie.year}</p>
        {!isFavoritePage && (
          <button
            className={`movie-card__like-button ${isLiked ? "liked" : ""}`}
            onClick={toggleLike}
          >
            {isLiked ? "♥" : "♡"} Нравится
          </button>
        )}
      </div>
    </div>
  );
};
