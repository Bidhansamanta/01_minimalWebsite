function Button({ buttonText }) {
  return (
    <div className="flex items-center justify-center pt-8 pb-2">
      <button className="w-fit cursor-pointer rounded-xl bg-black px-6 py-3 text-center text-lg font-medium text-white transition duration-300 hover:bg-gray-800 active:scale-95 sm:px-8 sm:py-3 md:text-xl">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;