import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectFavorites } from "../../redux/slices/favoritesSlice";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Movie } from "../../types/movie";
import "./FavoritesPage.css";

const FavoritesPage: React.FC = () => {
  const favorites: Movie[] = useAppSelector(selectFavorites);

  return (
    <div className="container">
      <h1 className="favorites-page__title">Избранное</h1>
      {favorites.length > 0 ? (
        <div className="favorites-page__list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="favorites-page__empty">Ваш список избранных фильмов пуст.</p>
      )}
    </div>
  );
};

export default FavoritesPage;