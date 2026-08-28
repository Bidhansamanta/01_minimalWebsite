function CollectionsCard({ imgUrl, paragraph, text }) {
  return (
    <div className="relative w-full my-2 max-w-sm mx-auto shadow-lg rounded-2xl text-center p-4 sm:p-5 md:p-6">
      <img
        src={imgUrl}
        alt={text}
        className="w-full max-w-[300px] my-3 h-auto object-contain mx-auto sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
      />

      <p className="mt-3 text-sm sm:text-base text-gray-500">{paragraph}</p>

      <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        {text}
      </h1>
    </div>
  );
}

export default CollectionsCard;
