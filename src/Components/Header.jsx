function Header({ title, para, img }) {
  return (
    <>
      <div className="h-[100vh] relative')]">
        <img className="h-full w-full object-cover" src={img} alt="" />
        <div className="text-white absolute bottom-12 left-24">
          <p>{para}</p>
          <h1 className="text-7xl font-bold w-3/4">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
