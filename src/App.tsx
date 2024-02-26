import { useCallback, useState } from "react";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import ProductsFetcher from "./components/ProductsFetcher/ProductsFetcher";
import ProductsFetcherByFilter from "./components/ProductsFetcher/ProductsFetcherByFilter";
import Wrapper from "./components/Wrapper/Wrapper";
import { FilterParams } from "./types/products";
import { EMPTY_BRAND, PROP_BRAND, PROP_PRICE } from "./constants";

const App: React.FC = () => {
  const [isEnabledFilterToggle, setFilterToggle] = useState(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({});

  const setFilterNewFilterParams = useCallback((params: FilterParams) => {
    Object.keys(params).map((key: string) => {
      if (!params[key]) {
        delete params[key];
        return;
      }

      if (key === PROP_PRICE) {
        params[key] = Number(params[key]);
        return;
      }

      if (key === PROP_BRAND && params[PROP_BRAND] === EMPTY_BRAND) {
        delete params[key];
      }
    });

    setFilterToggle(Object.values(params).length > 0);
    setFilterParams(params);
  }, []);

  return (
    <Wrapper>
      <FilterPanel setFilter={setFilterNewFilterParams} />
      {isEnabledFilterToggle ? <ProductsFetcherByFilter filter={filterParams} /> : <ProductsFetcher />}
    </Wrapper>
  );
};

export default App;
