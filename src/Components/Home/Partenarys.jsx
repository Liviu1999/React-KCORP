import { useState, useEffect, useRef } from "react";
function Partenarys() {
  const [parteners, setParteners] = useState([
    { id: 1, img: "../../../public/logo/un.png" },
    { id: 2, img: "../../../public/logo/deux.png" },
    { id: 3, img: "../../../public/logo/un.png" },
    { id: 4, img: "../../../public/logo/deux.png" },
    { id: 5, img: "../../../public/logo/un.png" },
    { id: 6, img: "../../../public/logo/deux.png" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParteners((prevParteners) => {
        const newParteners = [...prevParteners.slice(1), prevParteners[0]];
        return newParteners;
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="bg-black h-[30vh] flex flex-row shrink-0 items-center gap-12 px-4 overflow-hidden"
    >
      {parteners.map((el) => (
        <div key={el.id} className="bg-slate-100 h-2/3 min-w-64 rounded-md">
          <img
            className="w-full h-full object-cover"
            src={el.img}
            alt={el.id}
          />
        </div>
      ))}
    </div>
  );
}

export default Partenarys;
