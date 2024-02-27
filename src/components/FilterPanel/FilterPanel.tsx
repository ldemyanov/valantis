import { useForm } from "react-hook-form";
import type { FilterParams } from "../../types/products";
import css from "./FilterPanel.module.css";
import SearchIcon from "../Icons/Search";
import { useGetBrandsQuery } from "../../store/api/valantis";
import ArrowDownForSelect from "../Icons/ArrowDownForSelect";
import { EMPTY_BRAND, PROP_BRAND, PROP_PRICE, PROP_PRODUCT } from "../../constants";

type FilterPanelProps = {
  setFilter: (params: FilterParams) => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({ setFilter }) => {
  const { register, handleSubmit, getValues } = useForm();
  const { data } = useGetBrandsQuery();
  const selectBrandRef = register(PROP_BRAND);

  const toggleBrand: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    selectBrandRef.onChange(event);
    setFilter(getValues());
  };

  return (
    <form className={css.panel} onSubmit={handleSubmit(setFilter)}>
      <input className={css.input} {...register(PROP_PRODUCT)} placeholder="Название" />

      <input
        className={css.input + " " + css.inputPrice}
        type="number"
        {...register(PROP_PRICE, { min: 1, max: 10000000 })}
        placeholder="Цена"
      />

      {data && data.result.length > 0 && (
        <div className={css.selectContainer}>
          <select
            ref={selectBrandRef.ref}
            name={selectBrandRef.name}
            className={css.select}
            defaultValue={EMPTY_BRAND}
            onChange={toggleBrand}
            aria-placeholder={PROP_BRAND}
          >
            <option value={""} key={"emty"}>
              {EMPTY_BRAND}
            </option>
            {data.result.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
          <ArrowDownForSelect className={css.selectIcon} />
        </div>
      )}

      <button className={css.button} type="submit">
        Искать
        <SearchIcon className={css.searchIcon} />
      </button>
    </form>
  );
};

export default FilterPanel;
