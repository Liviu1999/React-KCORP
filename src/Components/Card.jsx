import { useState } from "react";

function Card() {
  const [notHover, setNotHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setNotHover(true)}
      onMouseLeave={() => setNotHover(false)}
      className="w-[30%] h-[60vh] relative overflow-hidden"
    >
      <img
        className="h-[80%] w-full object-cover"
        src="../../public/cat.jpg"
        alt=""
      />
      <div
        className={`absolute bg-black p-2 flex flex-col justify-between gap-2 font-semibold transition-all ease-in-out  ${
          notHover
            ? "bottom-0 duration-500"
            : "bottom-[-65px] duration-500 cursor-pointer"
        }`}
      >
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p>$11,00</p>
        <button className="w-full h-[50px] bg-blue-300 text-black hover:bg-blue-950 hover:text-white">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default Card;
