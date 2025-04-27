import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../types/forms";

type Props = {
  register: UseFormRegister<IFormInput>;
};

export const AgeRatingSelect = ({ register }: Props) => {
  return (
    <>
      <label className="filter-form__label">Возраст</label>
      <select className="filter-form__select" {...register("ageRating")}>
        <option className="filter-form__option" value="0">0+</option>
        <option className="filter-form__option" value="6">6+</option>
        <option className="filter-form__option" value="12">12+</option>
        <option className="filter-form__option" value="16">16+</option>
        <option className="filter-form__option" value="18">18+</option>
      </select>
    </>
  );
};
