function CreationsImages({ img, imgMobile, text }) {
  return (
    <div className="group relative overflow-hidden md:w-1/4">
      <img
        src={img}
        alt={text}
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      <img src={imgMobile} alt="" className="w-full md:hidden" />

      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>

      <h5>{text}</h5>
    </div>
  );
}

export default CreationsImages;
