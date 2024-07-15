import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Home/Footer";
import Newsletter from "./Home/Newsletter";
import PartenairesId from "./PartenairesId";
import axios from "axios";

export default function Partenaires() {
  const [partenaires, setPartenaires] = useState([]);

  function arrayBufferToBase64(buffer) {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        const data = response.data.rows.map((partenaire) => {
          const base64Flag = "data:image/jpeg;base64,";
          const imageStr = arrayBufferToBase64(partenaire.images.data);
          return {
            ...partenaire,
            images: base64Flag + imageStr,
          };
        });
        console.log(data);
        setPartenaires(data);
      })
      .catch((error) => {
        console.error("Error fetching the partenaires data:", error);
      });
  }, []);

  return (
    <div>
      <Header
        title={"DEVENEZ PARTENAIRE  KARMINE CORP"}
        para={"FAITES UN PAS DANS L'ESPORT AUX COTES DES MEILLEURS"}
        img={"../../public/BANNIERE_PARTENAIRE_DESKTOP.webp"}
      />
      <div className="flex flex-col gap-40 bg-black text-white py-24">
        {partenaires.map((el) => (
          <PartenairesId
            key={el.partenairesid}
            link={el.link}
            img={el.images}
            title={el.title}
            para={el.paragraphe}
          />
        ))}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
