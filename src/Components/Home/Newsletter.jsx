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
        <div className="">
          <input
            className="w-full h-2/3 py-2 px-4 text-black peer invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="email"
            name="email"
            id="email"
            placeholder="Votre addresse email"
            value={email}
            onChange={handleChangeEmail}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <p className="mt-2 invisible  peer-invalid:peer-placeholder-shown:invisible peer-invalid:visible  text-red-500 text-sm">
            Please provide a valid email address.
          </p>
        </div>
        <button className="bg-white text-black w-16 h-2/3" type="submit">
          OK
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
