import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Slidders({ items, title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberOfPlayers = items.length;
  const halfNumberOfPlayers = numberOfPlayers / 2;

  // console.log(halfNumberOfPlayers); // Outputs: 3
  const handleNext = () => {
    if (currentIndex < halfNumberOfPlayers) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {(title || description) && (
        <div className="py-10 bg-black text-white flex flex-col justify-center items-center">
          {title && <p className="text-blue-300 text-xs pb-4">{title}</p>}
          {description && <h3 className="text-4xl font-bold">{description}</h3>}
        </div>
      )}
      <div className="px-24 pb-36 bg-black text-white">
        <div className="w-full flex flex-row gap-20 overflow-x-hidden transition-transform duration-500">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-w-96 shrink-0"
              style={{ transform: `translateX(-${currentIndex * 485}px)` }}
            >
              <img
                className="h-full w-full object-cover"
                src={item.src}
                alt={item.name}
              />
              <h3 className="absolute top-1/2 left-1/3 text-3xl font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        <div className=" flex flex-row pt-4 justify-end">
          <MdKeyboardArrowLeft
            onClick={handlePrev}
            className="w-12 h-12 hover:cursor-pointer"
          />
          <MdKeyboardArrowRight
            onClick={handleNext}
            className="w-12 h-12 hover:cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Slidders;
