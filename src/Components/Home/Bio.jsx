import "./Bio.css";
function Bio({ title, para, img }) {
  return (
    <div className="bg-black h-[75vh]  px-64 py-8 grid grid-cols-2 grid-rows-1 text-white">
      <div className="col-start-1 flex flex-col justify-center gap-6">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p>{para}</p>
        <button className="w-1/3 border-solid border-white border-2 py-2 px-4 hover:border-blue-300 hover:text-blue-300 ">
          Find out
        </button>
      </div>
      <div className="w-full h-full overflow-hidden bg-black col-start-2 row-start-1">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
    </div>
  );
}

export default Bio;
