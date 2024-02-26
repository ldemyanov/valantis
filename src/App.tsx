import { useState } from "react";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import ProductsFetcher from "./components/ProductsFetcher/ProductsFetcher";
import ProductsFetcherByFilter from "./components/ProductsFetcher/ProductsFetcherByFilter";
import Wrapper from "./components/Wrapper/Wrapper";
import { FilterParams } from "./types/products";

const App: React.FC = () => {
  const [isEnabledFilterToggle, setFilterToggle] = useState(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({});

  const setFilterNewFilterParams = (params: FilterParams) => {
    Object.keys(params).map((key) => {
      if (!Number.isNaN(params.key)) {
        params[key] === Number(params[key]);
        console.log(params[key]);
      }

      if (params[key] === "") {
        delete params[key];
      }
    });

    setFilterToggle(Object.values(params).length > 0);
    setFilterParams(params);
  };

  return (
    <>
      <Wrapper>
        <FilterPanel setFilter={setFilterNewFilterParams} />
        {(console.log(isEnabledFilterToggle), (<></>))}
        {isEnabledFilterToggle ? <ProductsFetcherByFilter filter={filterParams} /> : <ProductsFetcher />}
      </Wrapper>
    </>
  );
};

export default App;
