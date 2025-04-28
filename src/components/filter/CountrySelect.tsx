import { UseFormRegister } from "react-hook-form";
import { Country } from "../../types/country";
import { IFormInput } from "../../types/forms";

type Props = {
  countries: Country[];
  register: UseFormRegister<IFormInput>;
};

export const CountrySelect = ({ countries, register }: Props) => {
  return (
    <>
      <label className="filter-form__label">Страна</label>
      <select className="filter-form__select" {...register("country")}>
        {countries.map((country) => (
          <option className="filter-form__option" key={country.slug} value={country.slug}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};
