function Header({placeHolderText}) {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-18 w-full items-center justify-between gap-2 rounded-2xl bg-white px-3 shadow-xl sm:gap-4 sm:px-5 md:justify-center md:gap-10 lg:gap-20">
        <h1 className="text-xl font-bold text-black sm:text-2xl">☰</h1>

        <img
          src="/images/logo.png"
          alt="logo"
          className="h-10 w-10 rounded-full sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
        />

        <div className="relative flex-1 sm:flex-none">
          <input
            type="text"
            placeholder={placeHolderText}
            className="h-full w-full rounded-xl border p-2 px-3 pr-9 text-black text-xl sm:w-[200px] sm:px-4 md:w-[250px]"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>

        <img
          src="/images/user.png"
          alt="user"
          className="h-10 w-10 rounded-full sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
        />
      </header>
    </>
  );
}

export default Header;