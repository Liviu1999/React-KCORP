import Footer from "../Home/Footer";
import Newsletter from "../Home/Newsletter";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

function Login() {
  const [butHover, setButHover] = useState(false);

  return (
    <>
      <div className="bg-black mt-[10vh] px-[20vw] py-2">
        <h1 className="text-5xl font-bold text-white pt-12 flex justify-center pb-12">
          SE CONNECTER
        </h1>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="col-start-1 col-end-2">
            <img
              className=" w-full h-full object-cover"
              src="../../../public/fond-blue.webp"
              alt=""
            />
          </div>
          <div className="text-white">
            <form className="text-black p-12 flex flex-col gap-8" action="">
              <input
                className="w-full p-4 rounded-none border-none hover:border-none"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full p-4 rounded-none border-none hover:border-none"
                type="password"
                placeholder="Password"
              />
              <div className="text-white h-11 flex justify-center ease-in-out">
                <button
                  onMouseEnter={() => setButHover(true)}
                  onMouseLeave={() => setButHover(false)}
                  className="p-2 w-2/5 h-full border-solid border-white hover:border-black hover:bg-blue-300 hover:text-black border-2"
                  type="submit"
                >
                  Login
                </button>
                <FaArrowRightLong
                  className={`border-solid border-2 h-full w-1/5 p-2 ${
                    butHover
                      ? "border-black text-black bg-blue-300"
                      : "border-white"
                  }`}
                />
              </div>
              <Link
                className=" text-white underline underline-offset-4 flex justify-center hover:text-blue-300"
                to={"/auth/register"}
              >
                {" "}
                Créer un compte
              </Link>
              <p className="text-white text-xs ">* Champs obligatoires</p>
            </form>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Login;
