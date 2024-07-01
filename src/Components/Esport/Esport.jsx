import { useState } from "react";
import Footer from "../Home/Footer";
import Newsletter from "../Home/Newsletter";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Header from "../Header";

function Esport() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const players = [
    { id: 1, name: "Player X", src: "../../public/player-pp.webp" },
    { id: 2, name: "Player Y", src: "../../public/player-pp.webp" },
    { id: 3, name: "Player Z", src: "../../public/player-pp.webp" },
    { id: 4, name: "Player A", src: "../../public/player-pp.webp" },
    { id: 5, name: "Player B", src: "../../public/player-pp.webp" },
    { id: 6, name: "Player C", src: "../../public/player-pp.webp" },
  ];

  const numberOfPlayers = players.length;
  const halfNumberOfPlayers = numberOfPlayers / 2;

  console.log(halfNumberOfPlayers); // Outputs: 3
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
      <Header
        title="VALORANT"
        para="VCT"
        img="../../public/Valorant-ban.webp"
      />

      <div className="bg-black flex flex-col items-center align-middle px-96 py-40 text-white">
        <p className="text-blue-300">NOTRE EQUIPE</p>
        <h2 className="text-5xl font-semibold pb-8 pt-4">L'EQUIPE VALORANT</h2>
        <p className="text-balance text-center">
          Valorant est un jeu vidéo free-to-play de tir à la première personne
          en multijoueur développé et édité par Riot Games. Dans le mode de jeu
          principal, deux équipes de cinq joueurs s'affrontent et les agents
          utilisent un système économique pour acheter des utilitaires et des
          armes. Une équipe est en attaque et une est en défense.
        </p>
      </div>
      <div className="px-24 pb-36 bg-black text-white">
        <div className="w-full flex flex-row gap-20 overflow-x-hidden transition-transform duration-500">
          {players.map((player) => (
            <div
              key={player.id}
              className="relative min-w-96 shrink-0"
              style={{ transform: `translateX(-${currentIndex * 485}px)` }}
            >
              <img
                className="h-full w-full object-cover"
                src={player.src}
                alt={player.name}
              />
              <h3 className="absolute top-1/2 left-1/3 text-5xl font-semibold">
                {player.name}
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
      <Newsletter />
      <Footer />
    </>
  );
}

export default Esport;
