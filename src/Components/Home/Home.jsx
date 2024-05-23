import Video from "./Video";
import Caroussel from "./Caroussel";
function Home() {
  return (
    <>
      <Video />
      <Caroussel name={"Trend"} />
      <Caroussel name={"Sport"} smaller={true} />
    </>
  );
}
export default Home;
