import React from "react";
import { Movie } from "../../types/movie";
import { Link } from "react-router-dom";
import { LikeButton } from "../../components/LikeButton/LikeButton";
import "./MovieCard.css";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
        {movie.genres && (
          <p className="movie-card__genres">
            Жанры: {movie.genres.map((g) => g.name).join(", ")}
          </p>
        )}
        <LikeButton movie={movie} className="movie-card__like-button" />
        <Link to={`/movie/${movie.id}`} className="movie-card__details-link">
          Подробнее
        </Link>
      </div>
    </div>
  );
};
