import { useRef, useState } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import Newsletter from "./Home/Newsletter";
import Footer from "./Home/Footer";
import AccordionUsage from "./AccordionUsage";
import ReviewBag from "./ReviewBag";

function ProductKC() {
  const [focusedRadio, setFocusedRadio] = useState(null);
  const [focusColors, setFocusedColors] = useState(null);
  const [itemsNumber, setItemsNumber] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [price, setPrice] = useState(35);
  const basePrice = 35;

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["blue", "red", "green", "black", "white"];

  return (
    <div>
      <div className="flex bg-black text-white py-[15vh] ">
        <div className=" w-[50vw] flex flex-col gap-4 pb-[6.5vh]">
          <div className="h-[100vh] bg-red-300">
            <img
              className="h-full w-full object-cover"
              src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
              alt=""
            />
          </div>
          <div className="h-[100vh] bg-red-300">
            <img
              className="h-full w-full object-cover"
              src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
              alt=""
            />
          </div>{" "}
          <div className="h-[100vh] bg-red-300">
            <img
              className="h-full w-full object-cover"
              src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
              alt=""
            />
          </div>{" "}
          <div className="h-[100vh] bg-red-300">
            <img
              className="h-full w-full object-cover"
              src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
              alt=""
            />
          </div>{" "}
          <div className="h-[100vh] bg-red-300">
            <img
              className="h-full w-full object-cover"
              src="../../public\KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
              alt=""
            />
          </div>
          <div>
            <AccordionUsage />
          </div>
        </div>
        <div className="min-h-full">
          <div className="w-[50vw] px-36 py-12 flex flex-col gap-10 sticky top-20">
            <h1 className="text-4xl font-semibold">T-SHIRT CLASSIQUE NOIR</h1>
            <p className="text-xs font-normal">
              Nous avons combiné la qualité et le style avec un coton 100%
              biologique et un design épuré et minimaliste, pour que tu puisses
              avoir l'air bien et te sentir stylé pendant ta journée. Fabriqué
              au Portugal 1
            </p>
            <div className="border-gray-300 border-2 p-4 flex flex-col gap-5">
              <a href="">Guidde de taille</a>
              <form className="flex gap-4" action="">
                {sizes.map((size) => (
                  <label
                    className={`w-10 h-10 flex justify-center items-center hover:border-blue-300 hover:cursor-pointer ${
                      focusedRadio === size
                        ? "border-blue-300 border-2 bg-blue-300 text-black"
                        : "border-gray-300 border-2"
                    }`}
                    htmlFor={size}
                    key={size}
                  >
                    {" "}
                    <input
                      className="sr-only"
                      type="radio"
                      name="size"
                      key={size}
                      id={size}
                      onFocus={() => setFocusedRadio(size)}
                      onBlur={() => setFocusedRadio(null)}
                    />
                    {size}
                  </label>
                ))}
              </form>
              <p>Color {" : " + focusColors ? focusColors : ""}</p>
              <form className="flex gap-4" action="">
                {colors.map((color) => (
                  <label
                    className={`w-8 h-8 flex justify-center items-center rounded-full bg-${color}-300 hover:border-blue-300 hover:cursor-pointer ${
                      focusColors === color
                        ? `border-${color}-300 border-2`
                        : "border-gray-300 border-2"
                    }`}
                    htmlFor={color}
                    key={color}
                    style={{ backgroundColor: color }}
                  >
                    {" "}
                    <input
                      className="sr-only"
                      type="radio"
                      name="color"
                      key={color}
                      id={color}
                      onFocus={() => setFocusedColors(color)}
                      onBlur={() => setFocusedRadio(null)}
                    />
                  </label>
                ))}
              </form>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">${price}</h2>
              <div className="flex">
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
            </div>
            <div className="flex h-12 gap-4">
              <button className="bg-blue-300 text-black w-full font-bold hover:bg-blue-950 hover:text-white">
                ADD TO BAG
              </button>
              <div
                onClick={() => setIsLiked(!isLiked)}
                className={`flex justify-center items-center border-2 hover:text-red-300  h-full w-12 hover:bg-white hover:border-white hover:cursor-pointer ${
                  isLiked ? "border-red-300 text-red-300 " : "border-gray-300"
                }`}
              >
                <CiHeart className="w-3/4 h-3/4 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductKC;
