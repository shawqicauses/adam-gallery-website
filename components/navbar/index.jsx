// Done Reviewing
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex h-auto w-full max-w-full items-center justify-center py-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-between xl-2:max-w-xl-7">
        <span className="text-xl font-semi-bold uppercase not-italic leading-none tracking-[0.2em] text-neutral-900 no-underline decoration-inherit">
          Adam
        </span>
        <ul className="absolute top-0 left-0 m-0 flex h-screen w-screen translate-x-full flex-col items-center justify-center gap-3 bg-white p-5 lg:relative lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:bg-transparent lg:p-0">
          {[
            {name: "Home", link: "#home"},
            {name: "About", link: "#about"},
            {name: "Products", link: "#products"},
            {name: "Contact", link: "#contact"}
          ].map((link, index) => (
            <li
              key={index}
              className="flex h-auto w-full cursor-pointer flex-row items-center justify-center gap-0 transition-all">
              <a
                href={link.link}
                className="inline-block w-full transform cursor-pointer truncate rounded-lg border-2 border-neutral-100 px-5 py-5 text-center text-lg font-medium leading-none text-neutral-500 no-underline outline-none transition-all ease-in hover:-translate-y-1 hover:text-neutral-900 focus:translate-y-0.5 focus:text-neutral-900 lg:rounded-none lg:border-none lg:p-0">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
