import { MdKeyboardArrowRight } from "react-icons/md";

export default function PartenairesId({ link, img, title, para }) {
  const handleRedirection = () => {
    window.location.href = link;
  };
  return (
    <div className="flex justify-center px-[15vw]">
      <div className="flex justify-center items-center w-1/2">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="w-1/2 px-16 flex flex-col justify-center gap-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm font-thin">{para}</p>
        <div
          onClick={handleRedirection}
          className="min-w-[33%] max-w-[50%] h-10 flex flex-row items-center justify-between gap-1 px-4 border border-gray-300 hover:bg-blue-300 hover:border-none hover:text-black hover:cursor-pointer"
        >
          <button className="font-bold">DECOUVRIR</button>
          <MdKeyboardArrowRight className="h-full w-1/5" />
        </div>
      </div>
    </div>
  );
}
