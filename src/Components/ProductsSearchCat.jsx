import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import ProductsSearchForm from "./ProductsSearchForm";

function ProductsSearchCat({ categoryName }) {
  const [showCat, setShowCat] = useState(true);

  return (
    <div className="border-2 border-gray-400  w-5/6 px-2 py-2 mb-2">
      <p
        onClick={() => {
          setShowCat(!showCat);
        }}
        className="flex items-center justify-between text-base font-semibold"
      >
        {categoryName}{" "}
        {showCat ? (
          <MdKeyboardArrowDown className="w-5 h-5 cursor-pointer" />
        ) : (
          <MdKeyboardArrowUp className="w-5 h-5 cursor-pointer" />
        )}
      </p>
      <form
        className={`flex flex-col text-white text-xs font-thin pt-3 ${
          showCat ? "hidden" : ""
        }`}
        action=""
      >
        <ProductsSearchForm name="XS" number={10} />
        <ProductsSearchForm name="S" number={5} />
        <ProductsSearchForm name="M" number={15} />
        <ProductsSearchForm name="L" number={54} />
        <ProductsSearchForm name="XL" number={0} />
      </form>
    </div>
  );
}

export default ProductsSearchCat;
