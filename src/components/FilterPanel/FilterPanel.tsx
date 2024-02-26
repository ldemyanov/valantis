import { useForm } from "react-hook-form";
import type { FilterParams } from "../../types/products";
import css from "./FilterPanel.module.css";
import SearchIcon from "../Icons/Search";

type FilterPanelProps = {
  setFilter: (params: FilterParams) => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({ setFilter }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className={css.panel} onSubmit={handleSubmit(setFilter)}>
      <input className={css.input} {...register("product")} placeholder="Название" />
      <input className={css.input} {...register("brand")} placeholder="Бренд" />
      <input
        className={css.input}
        type="number"
        {...register("price", { min: 100, max: 10000000 })}
        placeholder="Цена"
      />
      <button className={css.button} type="submit">
        Искать
        <SearchIcon className={css.searchIcon} />
      </button>
    </form>
  );
};

export default FilterPanel;
