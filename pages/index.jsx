import { ExternalLinkIcon } from "@heroicons/react/outline"
import { ArchiveIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { classes } from "../lib/utils"

function Home() {
  const colors = [
    { color: "bg-yellow-300" },
    { color: "bg-amber-300" },
    { color: "bg-orange-300" },
    { color: "bg-red-300" },
    { color: "bg-indigo-300" },
    { color: "bg-purple-300" },
    { color: "bg-pink-300" }
  ]

  return (
    <Fragment>
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
      <header
        id="home"
        className={classes(
          "relative h-full min-h-screen w-full",
          "flex items-center justify-center",
          "overflow-hidden py-24 sm:py-32 md:py-40"
        )}>
        <div
          className={classes(
            "container mx-auto px-5 xl-2:max-w-xl-7",
            "flex h-full w-full flex-col",
            "items-center justify-center gap-0"
          )}>
          <h1
            className={classes(
              "max-w-lg text-xl-4 font-extra-bold leading-[1.15]",
              "text-center tracking-tight text-neutral-900",
              "mb-4 md:mb-8 md:max-w-xl-2 md:text-xl-5",
              "xl:max-w-xl-4 xl:text-xl-6"
            )}>
            A{" "}
            <span
              className={classes(
                "not-italic underline underline-offset-4",
                "decoration-yellow-500 decoration-4"
              )}>
              cheap
            </span>{" "}
            store gives its client a stunning products
            <span className={classes("text-yellow-500")}>.</span>
          </h1>
          <p
            className={classes(
              "max-w-xl text-lg font-normal leading-relaxed",
              "mb-8 text-center text-neutral-600",
              "md:mb-14 md:max-w-xl-3 md:text-xl"
            )}>
            Welcome to the official website of{" "}
            <span className={classes("font-medium text-neutral-900")}>
              Adam Gallery
            </span>{" "}
            where you can find the cheapest prices ever across the other
            competitors.
          </p>
          <div
            className={classes(
              "flex h-auto w-full flex-col",
              "items-stretch justify-center gap-3",
              "sm:w-max sm:flex-row sm:gap-10",
              "sm:gap-4 lg:gap-5"
            )}>
            <a href="#products" className={classes("button button-primary")}>
              <ArchiveIcon
                className={classes(
                  "relative h-6 w-6",
                  "fill-current stroke-transparent"
                )}
              />
              <span>Our Products</span>
            </a>
            <a
              href="https://instagram.com/adam_bag7/"
              target={"blank"}
              className={classes("button button-tertiary")}>
              <ExternalLinkIcon
                strokeWidth={2}
                className={classes(
                  "relative h-6 w-6",
                  "fill-transparent stroke-current"
                )}
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div
          className={classes(
            "absolute flex h-full w-full flex-row",
            "top-1/2 left-1/2 bottom-auto right-auto -z-10",
            "items-center justify-center gap-96",
            "-translate-x-1/2 -translate-y-1/2 -rotate-12",
            "transform transition-all"
          )}>
          <div
            className={classes(
              "relative flex h-full w-full",
              "items-center justify-center gap-5",
              "transform transition-all"
            )}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={classes(
                  "relative h-96 w-10 blur-xl-3",
                  "rounded-full mix-blend-soft-light",
                  color.color
                )}></div>
            ))}
          </div>
          <div
            className={classes(
              "relative flex h-full w-full",
              "items-center justify-center gap-5",
              "transform transition-all"
            )}>
            {colors.map((color, index) => (
              <div
                key={index}
                className={classes(
                  "relative h-96 w-10 blur-xl-3",
                  "rounded-full mix-blend-soft-light",
                  color.color
                )}></div>
            ))}
          </div>
        </div>
        <div
          className={classes(
            "absolute h-screen w-screen",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "overflow-hidden bg-white transition-all"
          )}>
          <div
            className={classes(
              "absolute flex flex-row",
              "top-0 left-0 bottom-auto right-auto -z-50",
              "items-center justify-center gap-8"
            )}>
            {[...new Array(80)].map((item, index) => (
              <div
                key={index}
                className={classes(
                  "relative h-screen w-0.5 overflow-hidden",
                  "border border-transparent bg-neutral-50"
                )}></div>
            ))}
          </div>
          <div
            className={classes(
              "absolute flex flex-col",
              "top-0 left-0 bottom-auto right-auto -z-50",
              "items-center justify-center gap-8"
            )}>
            {[...new Array(80)].map((item, index) => (
              <div
                key={index}
                className={classes(
                  "relative h-0.5 w-screen overflow-hidden",
                  "border border-transparent bg-neutral-50"
                )}></div>
            ))}
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Home
