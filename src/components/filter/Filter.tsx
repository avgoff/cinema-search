import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Genre } from "../../types/genre";
import { IFormInput } from "../../types/forms";
import { GenreSelect } from "./GenreSelect";
import { YearSelect } from "./YearSelect";
import { fetchMoviesBySearch } from "../../redux/thunks/fetchMoviesBySearch";

import "./Filter.less";

type FormProps = {
  genres: Genre[];
};

export const Filter = ({ genres }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const filters = {
      year: data.year,
      genre: data.genre
    };
    
    dispatch(fetchMoviesBySearch({ filters }));
    
    const query = new URLSearchParams({
      year: data.year || '',
      genre: data.genre || ''
    }).toString();
    navigate(`/search?${query}`);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="filter-form__content">
        <div className="filter-form__column">
          <YearSelect register={register} />
        </div>
        <div className="filter-form__column">
          <GenreSelect register={register} genres={genres} />
        </div>
        <div className="filter-form__apply">
          <button className="filter-form__apply-button" type="submit">
            Применить фильтры
          </button>
        </div>
      </div>
    </form>
  );
};
