import Header from "../Header";
import Footer from "../Home/Footer";
import Newsletter from "../Home/Newsletter";
import Slidders from "../Slidders";

function Ultras() {
  const players = [
    { id: 1, name: "MARTIN_FACTEUR", src: "../../public/player-pp.webp" },
    { id: 2, name: "Player Y", src: "../../public/player-pp.webp" },
    { id: 3, name: "Player Z", src: "../../public/player-pp.webp" },
    { id: 4, name: "Player A", src: "../../public/player-pp.webp" },
    { id: 5, name: "Player B", src: "../../public/player-pp.webp" },
    { id: 6, name: "Player C", src: "../../public/player-pp.webp" },
  ];

  return (
    <>
      <Header
        title="LA ZONE DES ULTRAS"
        para="ULTRAS"
        img="../../../public/BANNIERE_ULTRA_DESKTOP.webp"
      />
      <Slidders
        items={players}
        title="LES FANARTS"
        description="VOUS AVES DU TALENT"
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Ultras;
