import { classes } from "../../lib/utils"

function Navbar() {
  return (
    <nav
      className={classes(
        "flex h-auto w-full max-w-full",
        "absolute top-0 left-0 z-50 py-10",
        "items-center justify-center"
      )}>
      <div
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-center justify-center gap-10",
          "lg:flex-row lg:items-center lg:justify-between"
        )}>
        <span
          className={classes(
            "text-xl font-semi-bold leading-none",
            "not-italic tracking-tight text-neutral-900",
            "no-underline decoration-inherit"
          )}>
          Adam
        </span>
        <ul
          className={classes(
            "flex h-screen w-screen translate-x-full flex-col",
            "absolute top-0 left-0 m-0 bg-white p-5",
            "items-center justify-center gap-3",
            "lg:relative lg:h-auto lg:w-auto lg:p-0",
            "lg:flex-row lg:items-center lg:justify-center lg:gap-10",
            "lg:translate-x-0 lg:bg-transparent"
          )}>
          <li
            className={classes(
              "flex h-auto w-full flex-row",
              "items-center justify-center gap-0",
              "cursor-pointer transition-all"
            )}>
            <a
              href="#home"
              className={classes(
                "",
                "inline-block w-full text-lg font-medium leading-none",
                "truncate text-neutral-500 no-underline outline-none",
                "rounded-lg border-2 border-neutral-100 px-5 py-5 text-center",
                "transform cursor-pointer transition-all ease-in",
                "hover:-translate-y-1 hover:text-neutral-900",
                "focus:translate-y-0.5 focus:text-neutral-900",
                "lg:rounded-none lg:border-none lg:p-0"
              )}>
              Home
            </a>
          </li>
          <li
            className={classes(
              "flex h-auto w-full flex-row",
              "items-center justify-center gap-0",
              "cursor-pointer transition-all"
            )}>
            <a
              href="#products"
              className={classes(
                "",
                "inline-block w-full text-lg font-medium leading-none",
                "truncate text-neutral-500 no-underline outline-none",
                "rounded-lg border-2 border-neutral-100 px-5 py-5 text-center",
                "transform cursor-pointer transition-all ease-in",
                "hover:-translate-y-1 hover:text-neutral-900",
                "focus:translate-y-0.5 focus:text-neutral-900",
                "lg:rounded-none lg:border-none lg:p-0"
              )}>
              Products
            </a>
          </li>
          <li
            className={classes(
              "flex h-auto w-full flex-row",
              "items-center justify-center gap-0",
              "cursor-pointer transition-all"
            )}>
            <a
              href="#contact"
              className={classes(
                "",
                "inline-block w-full text-lg font-medium leading-none",
                "truncate text-neutral-500 no-underline outline-none",
                "rounded-lg border-2 border-neutral-100 px-5 py-5 text-center",
                "transform cursor-pointer transition-all ease-in",
                "hover:-translate-y-1 hover:text-neutral-900",
                "focus:translate-y-0.5 focus:text-neutral-900",
                "lg:rounded-none lg:border-none lg:p-0"
              )}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
