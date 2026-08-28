function Card({ imgUrl, text, paragraph, year }) {
  return (
    <div className="mx-auto my-6 w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-lg  duration-300  hover:shadow-2xl sm:max-w-md md:max-w-lg lg:max-w-xl">
      <img src={imgUrl} alt="Images" />

      <h1 className="mt-5 text-center text-2xl font-bold text-black sm:text-3xl">
        {text} <span>{year}</span>
      </h1>

      <p className="mt-3 px-2 text-center text-base leading-7 text-gray-600 sm:px-4 sm:text-lg">
        {paragraph}
      </p>
    </div>
  );
}

export default Card;
