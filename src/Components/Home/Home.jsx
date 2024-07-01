import Video from "./Video";
import Caroussel from "./Caroussel";
import Bio from "./Bio";
import Partenarys from "./Partenarys";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Video />
      <Caroussel name={"Trend"} />
      <Caroussel name={"Sport"} smaller={true} />
      <Bio
        title="L'ÉQUIPE QUI A CRÉE LA DIFFÉRENCE"
        para="La Karmine Corp, s’est rapidement imposée comme leader dans le monde de l’esport en France. Créée fin 2020 par Kameto et Prime, l’équipe vise désormais l’international avec un seul objectif : gagner les championnats du monde sur tous les jeux. (League of Legends, Valorant, Rocket League, TFT, Trackmania et Smash Bros Ultimate)"
        img="https://www.karminecorp.fr/cdn/shop/files/home.jpg?crop=center&height=600&v=1699871448&width=600"
      />
      <Partenarys />
      <Newsletter />
      <Footer />
    </>
  );
}
export default Home;
