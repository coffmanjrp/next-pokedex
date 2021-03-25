const Header = ({ title }) => {
  return (
    <>
      <div className="mb-10 w-full py-5 px-2">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
      </div>
    </>
  );
};

export default Header;
