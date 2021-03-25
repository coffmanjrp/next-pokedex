const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 flex justify-center items-center pt-4 pb-8 w-full h-auto">
        <small className="text-sm">
          Pokémon and All Respective Names are Trademark and &copy; of Pokémon
          co./Nintendo/Creatures Inc./GAME FREAK inc. 1995-
          {new Date().getFullYear()}
        </small>
      </div>
    </>
  );
};

export default Footer;
