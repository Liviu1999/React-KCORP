import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function ProductsHeader() {
  const [showTri, setShotTri] = useState(true);

  return (
    <>
      <div className="col-start-7 col-end-8 relative">
        <p
          onClick={() => setShotTri(!showTri)}
          className="flex justify-end cursor-pointer relative"
        >
          TRIER PAR{" "}
          {showTri ? (
            <MdKeyboardArrowDown className="w-5 h-5" />
          ) : (
            <MdKeyboardArrowUp className="w-5 h-5" />
          )}
        </p>
        <div
          className={`z-10 absolute top-8 right-0 text-white border-gray-400 border-2 font-light text-xs p-2 bg-black w-full ${
            showTri ? "hidden" : ""
          }`}
        >
          <p>Pertinance</p>
          <p>Prix croissant</p>
          <p>Prix décroissant</p>
        </div>
      </div>
    </>
  );
}

export default ProductsHeader;
