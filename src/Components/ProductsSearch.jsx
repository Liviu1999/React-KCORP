import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";
import ProductsSearchForm from "./ProductsSearchForm";
import ProductsSearchCat from "./ProductsSearchCat";
import ProductsSearchFormPrice from "./ProductsSearchFormPrice";

function ProductsSearch() {
  const [showDispo, setShowDispo] = useState(true);

  return (
    <div className="col-start-1 col-end-2 row-start-2 sticky top-[35vh]">
      <ProductsSearchCat categoryName={"STOCK"} />
      <ProductsSearchCat categoryName={"TAILLES"} />
      <ProductsSearchFormPrice />
    </div>
  );
}

export default ProductsSearch;
