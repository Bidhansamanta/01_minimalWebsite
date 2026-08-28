function ImgContainer({ imgUrl }) {
  return (
    <img
      src={imgUrl}
      alt="Laptop"
      className="w-full max-w-[300px] h-auto object-contain mx-auto sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
    />
  );
}

export default ImgContainer;