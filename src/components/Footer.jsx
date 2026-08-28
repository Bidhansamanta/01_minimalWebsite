function Footer() {
  return (
    <header className="bottom-0 left-0 z-50 h-20 w-full rounded-2xl bg-blue-300 sticky">
      <ul className="flex h-full items-center justify-around px-3 sm:justify-center sm:gap-12 sm:px-4 md:gap-24 lg:gap-40 xl:gap-60">
        <li className="cursor-pointer text-xl font-semibold text-black">
          <a
            href="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="fa-solid fa-house text-xl text-black"></i>
            <div className="text-sm text-black">HOME</div>
          </a>
        </li>

        <li className="cursor-pointer text-xl font-semibold text-black">
          <a
            href="/explore"
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="fa-solid fa-compass text-xl text-black"></i>
            <div className="text-sm text-black">EXPLORE</div>
          </a>
        </li>

        <li className="cursor-pointer text-xl font-semibold text-black ">
          <a
            href="/collections"
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="fa-solid fa-vault text-xl text-black"></i>
            <div className="text-sm text-black">VAULT</div>
          </a>
        </li>

        <li className="cursor-pointer text-xl font-semibold text-black ">
          <a
            href="/account"
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="fa-solid fa-user text-xl text-black"></i>
            <div className="text-sm text-black">ACCOUNT</div>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Footer;