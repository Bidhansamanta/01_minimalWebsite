function Middle({ li1, li2, li3, li4 }) {
  return (
    <div className="w-full my-5">
      <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 p-4">
        <li className="text-base md:text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
          {li1}
        </li>

        <li className="text-base md:text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
          {li2}
        </li>

        <li className="text-base md:text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
          {li3}
        </li>

        <li className="text-base md:text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
          {li4}
        </li>
      </ul>
    </div>
  );
}

export default Middle;
