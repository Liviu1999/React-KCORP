import Footer from "../Home/Footer";
import Newsletter from "../Home/Newsletter";
import Header from "../Header";
import Slidders from "../Slidders";

function Esport() {
  const players = [
    { id: 1, name: "Player X", src: "../../public/player-pp.webp" },
    { id: 2, name: "Player Y", src: "../../public/player-pp.webp" },
    { id: 3, name: "Player Z", src: "../../public/player-pp.webp" },
    { id: 4, name: "Player A", src: "../../public/player-pp.webp" },
    { id: 5, name: "Player B", src: "../../public/player-pp.webp" },
    { id: 6, name: "Player C", src: "../../public/player-pp.webp" },
  ];
  return (
    <>
      <Header
        title="VALORANT"
        para="VCT"
        img="../../public/Valorant-ban.webp"
      />

      <div className="bg-black flex flex-col items-center justify-center py-20 text-white">
        <p className="text-blue-300">NOTRE EQUIPE</p>
        <h2 className="text-5xl font-semibold pb-8 pt-4">L'EQUIPE VALORANT</h2>
        <p className="text-balance text-center max-w-[50vw]">
          Valorant est un jeu vidéo free-to-play de tir à la première personne
          en multijoueur développé et édité par Riot Games. Dans le mode de jeu
          principal, deux équipes de cinq joueurs s'affrontent et les agents
          utilisent un système économique pour acheter des utilitaires et des
          armes. Une équipe est en attaque et une est en défense.
        </p>
      </div>
      <Slidders items={players} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Esport;
