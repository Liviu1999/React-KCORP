import { RxCross1 } from "react-icons/rx";
import { useRef, useState } from "react";

export default function ReviewBag({ isHidden, setIsHidden }) {
  const [itemsNumber, setItemsNumber] = useState(1);
  const [price, setPrice] = useState(35);
  const basePrice = 35;

  return (
    <div
      className={`${
        isHidden ? "hidden" : ""
      } z-50 h-[100vh] w-[30vw] fixed right-0 top-0 bg-black text-white flex flex-col border-l border-gray-300`}
    >
      <div className="h-[10vh] flex px-8 py-4 justify-between items-center border-b border-gray-300">
        <h1 className="text-3xl font-bold">
          MON PANIER (
          <span className="text-blue-300 text-3xl font-bold">4</span>)
        </h1>
        <RxCross1
          onClick={() => setIsHidden(!isHidden)}
          className="h-3/4 w-1/12 hover:cursor-pointer"
        />
      </div>
      <div className="h-[72.5vh] px-8 py-4 overflow-y-scroll flex flex-col gap-4">
        <div className="h-[30vh] flex flex-col border border-gray-300">
          <div className="flex flex-row h-2/3">
            <div className="h-full w-2/5">
              <img
                className="h-full w-full object-cover"
                src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 p-4">
              <h2>E-CARTE CADEAU</h2>
              <p>Montants: 10,00$</p>
              <h2>$10,00</h2>
            </div>
          </div>
          <div className="flex flex-rox h-1/3">
            <div className="flex justify-center items-center w-2/5">
              <button
                onClick={() => {
                  setItemsNumber((prev) => Math.max(prev - 1, 1));
                  setPrice((prev) => Math.max(prev - basePrice, basePrice));
                }}
                className="w-10 h-10 flex justify-center items-center border-gray-200 border-2 text-lg"
              >
                -
              </button>
              <p className="w-10 h-10 flex justify-center items-center border-gray-200 border-2 text-lg">
                {itemsNumber}
              </p>
              <button
                onClick={() => {
                  setItemsNumber((prev) => prev + 1);
                  setPrice((prev) => prev + basePrice);
                }}
                className="w-10 h-10 flex justify-center items-center border-gray-200 border-2 text-lg"
              >
                +
              </button>
            </div>
            <button className="flex justify-end items-center underline  p-4 hover:text-blue-300">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="h-[10vh] px-8 py-4 flex justify-between border-t border-gray-300">
        <p>Total</p>
        <p>$100,00</p>
      </div>
      <div className="h-[7.5vh]">
        <button className="h-full w-full bg-blue-300 text-black text-lg font-bold  hover:bg-blue-950 hover:text-white">
          Proceed to payment
        </button>
      </div>
    </div>
  );
}
