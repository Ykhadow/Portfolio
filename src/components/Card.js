const Card = ({ image, heading, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className=" z-10 ">
      <div className=" bg-neutral-800/60 text-white backdrop-blur-sm shadow-xl hover:scale-105 duration-200 ease-in-out cursor-pointer md:h-full">
        <img className="h-48 w-full" alt={`${heading}'s Project`} src={image} />
        <div className="p-4">
          <p className="h4 ">{heading}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
