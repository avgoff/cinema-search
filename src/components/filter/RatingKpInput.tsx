import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../types/forms";

type Props = {
  register: UseFormRegister<IFormInput>;
};

export const RatingKpInput = ({ register }: Props) => {
  return (
    <>
      <label className="filter-form__label">Рейтинг КП</label>
      <input type="range" className="filter-form__select" {...register("ratingKp")} placeholder="7-10" />
    </>
  );
};
