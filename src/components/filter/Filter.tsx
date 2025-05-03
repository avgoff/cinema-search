import { useForm, SubmitHandler } from "react-hook-form";
import { Genre } from "../../types/genre";
import { IFormInput } from "../../types/forms";
import { GenreSelect } from "./GenreSelect";
import { YearSelect } from "./YearSelect";
import { useQueryParams } from "../../redux/hooks/useQueryParams";

import "./Filter.less";

type FormProps = {
  genres: Genre[];
};

export const Filter = ({ genres }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { setParams } = useQueryParams();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setParams({
      year: data.year || undefined,
      genre: data.genre || undefined,
    });
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
