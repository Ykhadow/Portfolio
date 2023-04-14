const Card = ({ image, heading }) => {
  return (
    <div className="bg-white z-10 shadow-xl hover:scale-105 duration-200 ease-in-out cursor-pointer">
      <img src={image} />
      <div className="p-4">
        <p className="h4">{heading}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit nullam hac
          tempus mollis velit non
        </p>
      </div>
    </div>
  );
};

export default Card;
