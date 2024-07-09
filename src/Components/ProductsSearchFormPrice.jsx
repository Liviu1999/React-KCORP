import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

function ProductsSearchFormPrice() {
  const [showCat, setShowCat] = useState(true);
  const [price, setPrice] = useState(0);

  const handlePriceChange = (e) => {
    e.preventDefault;
    setPrice(e.target.value);
  };

  return (
    <div className="border-2 border-gray-400  w-5/6 px-2 py-2 mb-2">
      <p
        onClick={() => {
          setShowCat(!showCat);
        }}
        className="flex items-center justify-between text-base font-semibold"
      >
        Price
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
        <label htmlFor="price" className="flex items-center pb-2 gap-2">
          {" "}
          <input
            type="range"
            value={price}
            onChange={handlePriceChange}
            min={0}
            max={65}
            name="price"
            id="price"
          />
        </label>
        <input
          className=" text-white bg-transparent border rounded-md p-1 text-center"
          type="number"
          value={price}
          onChange={handlePriceChange}
          min={0}
          max={65}
          name="maximum"
          id="maximum"
        />
      </form>
    </div>
  );
}

export default ProductsSearchFormPrice;
