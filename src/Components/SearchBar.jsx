import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
function SearchBar() {
  return (
    <div className="pb-20 flex justify-center items-center text-white">
      <form
        action=""
        className="flex items-center justify-between border-gray-400 border-b-2 gap-2 w-[35vw] h-[10vh]"
      >
        <CiSearch className="w-10 h-10" />
        <input
          type="text"
          placeholder="SEARCH"
          className="w-3/4 h-10 bg-black text-3xl font-semibold border-none outline-none"
        />
        <MdKeyboardArrowRight className="w-10 h-10" />
      </form>
    </div>
  );
}

export default SearchBar;
