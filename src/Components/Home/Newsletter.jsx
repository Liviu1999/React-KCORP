import { useState } from "react";
import "../../app.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div className="bg-blue-cat bg-no-repeat bg-cover bg-center text-white h-[40vh]  px-96 flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">NOTRE NEWSLETTER</h1>
        <p>Restez informé(e) de nos nouveautés & offres</p>
      </div>
      <form action="" className="w-2/3 flex justify-center gap-1">
        <input
          className="w-2/3 py-2 px-4 text-black"
          type="email"
          name="email"
          id="email"
          placeholder="Votre addresse email"
          value={email}
          onChange={handleChangeEmail}
        />
        <button className="bg-white text-black h-full w-16" type="submit">
          OK
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
