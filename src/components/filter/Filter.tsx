import { useForm, SubmitHandler } from "react-hook-form";
import { Genre } from "../../types/genre";
import { Country } from "../../types/country";
import "./Filter.less";

interface IFormInput {
  year: string;
  genre: string;
  country: string;
  ratingKp: string;
  ratingImdb: string;
  ageRating: string;
}

interface FormProps {
  genres: Genre[];
  countries: Country[];
}

const Filter = ({ genres, countries }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Форма отправлена:", data);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="filter-form__box-input">
        <label className="filter-form__label">Год</label>
        <select className="filter-form__select" {...register("year")}>
          {Array.from({ length: 2025 - 1895 + 1 }, (_, i) => 2025 - i).map(
            (year) => (
              <option className="filter-form__option" key={year} value={year}>
                {year}
              </option>
            )
          )}
        </select>
      </div>

      <div className="filter-form__box-input">
        <label className="filter-form__label">Жанр</label>
        <select className="filter-form__select" {...register("genre")}>
          {genres.map((genre) => (
            <option
              className="filter-form__option"
              key={genre.slug}
              value={genre.slug}
            >
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-form__box-input">
        <label className="filter-form__label">Страна</label>
        <select className="filter-form__select" {...register("country")}>
          {countries.map((country) => {
            return (
              <option
                className="filter-form__option"
                key={country.slug}
                value={country.slug}
              >
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter-form__box-input">
        <label className="filter-form__label">Рейтинг КП</label>
        <input type="range" {...register("ratingKp")} placeholder="7-10" />
      </div>
      <div className="filter-form__box-input">
        <label className="filter-form__label">Рейтинг IMDB</label>
        <input type="range" {...register("ratingImdb")} placeholder="6-9" />
      </div>
      <div className="filter-form__box-input">
        <label className="filter-form__label">Возраст</label>
        <select className="filter-form__select" {...register("ageRating")}>
          <option className="filter-form__option" value="0">
            0+
          </option>
          <option className="filter-form__option" value="6">
            6+
          </option>
          <option className="filter-form__option" value="12">
            12+
          </option>
          <option className="filter-form__option" value="16">
            16+
          </option>
          <option className="filter-form__option" value="18">
            18+
          </option>
        </select>
      </div>
      <input className="filter-form__submit" type="submit" value="Search" />
    </form>
  );
};

export default Filter;
