function Address({ heading3, heading4 }) {
  return (
    <div className="w-full text-center my-5">
      <h3 className="text-sm  sm:text-base md:text-lg font-medium tracking-wider text-gray-800">
        {heading3}
      </h3>

      <h4 className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
        {heading4}
      </h4>
    </div>
  );
}

export default Address;