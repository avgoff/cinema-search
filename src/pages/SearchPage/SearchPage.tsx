import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchMoviesBySearch } from "../../redux/thunks/fetchMoviesBySearch";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useQueryParams } from "../../redux/hooks/useQueryParams";
import "./SearchPage.css"; 

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { getParam } = useQueryParams();
  const { movies, loading, error } = useAppSelector((state) => state.movies);

  const query = getParam("query");
  const year = getParam("year");
  const genre = getParam("genre");

  useEffect(() => {
    dispatch(fetchMoviesBySearch({ 
      query, 
      filters: { ...(year && { year }), ...(genre && { genre }) } 
    }));
  }, [dispatch, query, year, genre]);

  if (loading) return <div className="container">Загрузка...</div>;
  if (error) return <div className="container">Ошибка: {error}</div>;

  return (
      <div className="container">
        {movies.length === 0 ? (
          <div>Ничего не найдено</div>
        ) : (
          <div className="movie__list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    );
};

export default SearchPage;