import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../types/forms";

type Props = {
  register: UseFormRegister<IFormInput>;
};

export const YearSelect = ({ register }: Props) => {
  const years = Array.from({ length: 2025 - 1895 + 1 }, (_, i) => 2025 - i);

  return (
    <>
      <label className="filter-form__label">Год</label>
      <select className="filter-form__select" {...register("year")}>
        {years.map((year) => (
          <option className="filter-form__option" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};
