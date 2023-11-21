const Card = ({ image, heading, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="bg-white z-10 ">
      <div className="shadow-xl hover:scale-105 duration-200 ease-in-out cursor-pointer md:h-full">
        <img className="h-48 w-full" alt={`${heading}'s Project`} src={image} />
        <div className="p-4">
          <p className="h4">{heading}</p>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
