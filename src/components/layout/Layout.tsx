import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGenres } from "../../redux/thunks/fetchGenres";
import { selectGenres } from "../../redux/slices/genreSlice";
import { Header } from "../Header/Header";
import { SearchInput } from "../search/SearchInput";
import { Filter } from "../filter/Filter";


export const Layout = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <div className="container">
        <h1>Добро пожаловать!</h1>
        <p>
          Используйте поле поиска ниже, чтобы найти фильмы по названию, жанру или году выпуска.
        </p>

        <SearchInput />
          {genres.length > 0 ? (
        <Filter genres={genres} />
      ) : (
        <span className="filter-loading">Загрузка фильтров</span>
      )}

      </div>
      <Outlet />
    </main>
  );
};
