import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGenres } from "../../redux/thunks/fetchGenres";
import { fetchCountries } from "../../redux/thunks/fetchCountries";
import { selectGenres } from "../../redux/slices/genreSlice";
import { selectCountries } from "../../redux/slices/countrieSlice";

import { Header } from "../Header/Header";

import Search from "../search/Search";
import Filter from "../filter/Filter";

export const Layout = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(selectGenres);
  const countries = useAppSelector(selectCountries);

  useEffect(() => {
    dispatch(fetchGenres()); //пусть пока тут загружаются жанры
    dispatch(fetchCountries()); //пусть пока тут загружаются страны
  }, [dispatch]);

  return (
    <main className="container">
      <Header />

      <Outlet />

      <Search />
      {genres.length > 0 && countries.length > 0 ? (
        <Filter genres={genres} countries={countries} />
      ) : (
        <span>Loader</span>
      )}
    </main>
  );
};

