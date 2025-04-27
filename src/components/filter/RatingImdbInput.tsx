import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../types/forms";

type Props = {
  register: UseFormRegister<IFormInput>;
};

export const RatingImdbInput = ({ register }: Props) => {
  return (
    <>
      <label className="filter-form__label">Рейтинг IMDB</label>
      <input type="range" className="filter-form__select" {...register("ratingImdb")} placeholder="6-9" />
    </>
  );
};
