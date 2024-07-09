import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import ProductsSearch from "./ProductsSearch";
import ProductsHeader from "./ProductsHeader";
import SearchBar from "./SearchBar";
import Newsletter from "./Home/Newsletter";
import Footer from "./Home/Footer";

function Search() {
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
      <div className="bg-black pt-[20vh] pb-[10vh]">
        <SearchBar />
        <div className="text-white px-[15vh] grid grid-cols-7 grid-rows-[75px_auto]">
          <div className="col-start-1 col-end-2 sticky top-[25vh]">
            <p> 57 PRODUITS</p>
          </div>
          <ProductsHeader />
          <div className="sticky ">
            {" "}
            <ProductsSearch />
          </div>
          <div className="col-start-2 col-end-8 row-start-2 flex flex-wrap justify-between gap-12">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Search;
