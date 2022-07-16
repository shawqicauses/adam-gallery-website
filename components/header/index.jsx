import { ExternalLinkIcon } from "@heroicons/react/outline"
import { ArchiveIcon } from "@heroicons/react/solid"
import { classes } from "../../lib/utils"

function Header() {
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
    <header
      id="home"
      className={classes(
        "relative h-screen min-h-[45rem] w-full",
        "flex items-center justify-center",
        "overflow-hidden bg-transparent"
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
            "sm:w-max sm:flex-row md:gap-4 xl:gap-5"
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
          "absolute h-full min-h-[45rem] w-full",
          "top-0 left-0 bottom-auto right-auto -z-50",
          "overflow-hidden bg-white transition-all"
        )}>
        <div
          className={classes(
            "absolute flex h-full w-full flex-row",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map((item, index) => (
            <div
              key={index}
              className={classes(
                "relative h-full w-0.5 overflow-hidden",
                "border border-transparent bg-neutral-50"
              )}></div>
          ))}
        </div>
        <div
          className={classes(
            "absolute flex h-full w-full flex-col",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map((item, index) => (
            <div
              key={index}
              className={classes(
                "relative h-0.5 w-full overflow-hidden",
                "border border-transparent bg-neutral-50"
              )}></div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
