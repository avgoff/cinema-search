import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Genre } from "../../types/genre";
import { Country } from "../../types/country";
import "./Filter.less";
import { IFormInput } from "../../types/forms";

import { GenreSelect } from "./GenreSelect";
import { CountrySelect } from "./CountrySelect";
import { YearSelect } from "./YearSelect";
import { AgeRatingSelect } from "./AgeRatingSelect";
import { RatingKpInput } from "./RatingKpInput";
import { RatingImdbInput } from "./RatingImdbInput";

type FormProps = {
  genres: Genre[];
  countries: Country[];
}

export const Filter = ({ genres, countries }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const query = new URLSearchParams(data).toString();
    navigate(`/search?${query}`);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="filter-form__box-input">
        <YearSelect register={register} />
      </div>

      <div className="filter-form__box-input">
        <GenreSelect register={register} genres={genres} />
      </div>

      <div className="filter-form__box-input">
        <CountrySelect register={register} countries={countries} />
      </div>

      <div className="filter-form__box-input">
        <RatingKpInput register={register} />
      </div>

      <div className="filter-form__box-input">
        <RatingImdbInput register={register} />
      </div>

      <div className="filter-form__box-input">
        <AgeRatingSelect register={register} />
      </div>

      <input className="filter-form__submit" type="submit" value="Search" />
    </form>
  );
};