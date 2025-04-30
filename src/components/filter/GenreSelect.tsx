import { UseFormRegister } from "react-hook-form";
import { Genre } from "../../types/genre";
import { IFormInput } from "../../types/forms";

type Props = {
  genres: Genre[];
  register: UseFormRegister<IFormInput>;
};

export const GenreSelect = ({ genres, register }: Props) => {
  return (
    <>
      <label className="filter-form__label">Жанр</label>
      <select className="filter-form__select" {...register("genre")}>
        {genres.map((genre) => (
          <option className="filter-form__option" key={genre.slug} value={genre.name}>
          {genre.name}
        </option>  
        ))}
      </select>
    </>
  );
};
