import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMoviesBySearch } from "../../redux/thunks/fetchMoviesBySearch";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./SearchPage.css"; 

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    const year = searchParams.get('year') || '';
    const genre = searchParams.get('genre') || '';
    
    dispatch(fetchMoviesBySearch({ 
      query, 
      filters: { 
        ...(year && { year }), 
        ...(genre && { genre }) 
      } 
    }));
  }, [dispatch, searchParams]);

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