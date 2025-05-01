import React from "react";
import { Movie } from "../../types/movie";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavorite, removeFavorite, selectFavorites, } from "../../redux/slices/favoritesSlice";
import "./LikeButton.css";

type LikeButtonProps = {
  movie: Movie;
  className?: string;
  withText?: boolean;
};

export const LikeButton: React.FC<LikeButtonProps> = ({
  movie,
  className = "",
  withText = true,
}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isLiked = favorites.some((fav) => fav.id === movie.id);

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <button
      onClick={toggleLike}
      className={`like-button ${isLiked ? "liked" : ""} ${className}`}
    >
      {isLiked ? "♥" : "♡"} {withText && "Нравится"}
    </button>
  );
};
