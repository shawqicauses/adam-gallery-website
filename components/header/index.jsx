import {ExternalLinkIcon} from "@heroicons/react/outline"
import {ArchiveIcon} from "@heroicons/react/solid"

export default function Header() {
  const colors = [
    {color: "bg-yellow-300"},
    {color: "bg-amber-300"},
    {color: "bg-orange-300"},
    {color: "bg-red-300"},
    {color: "bg-indigo-300"},
    {color: "bg-purple-300"},
    {color: "bg-pink-300"}
  ]

  return (
    <header
      id="home"
      className="relative flex h-screen min-h-[45rem] w-full items-center justify-center overflow-hidden bg-transparent">
      <div className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-0 px-5 xl-2:max-w-xl-7">
        <h1 className="mb-4 max-w-lg text-center text-xl-4 font-extra-bold leading-[1.15] tracking-tight text-neutral-900 md:mb-8 md:max-w-xl-2 md:text-xl-5 xl:max-w-xl-4 xl:text-xl-6">
          A{" "}
          <span className="not-italic underline decoration-yellow-500 decoration-4 underline-offset-4">
            cheap
          </span>{" "}
          store gives its client a stunning products
          <span className="text-yellow-500">.</span>
        </h1>
        <p className="mb-8 max-w-xl text-center text-lg font-normal leading-relaxed text-neutral-600 md:mb-14 md:max-w-xl-3 md:text-xl">
          Welcome to the official website of{" "}
          <span className="font-medium text-neutral-900">Adam Gallery</span>{" "}
          where you can find the cheapest prices ever across the other
          competitors.
        </p>
        <div className="flex h-auto w-full flex-col items-stretch justify-center gap-3 sm:w-max sm:flex-row md:gap-4 xl:gap-5">
          <a href="#products" className="button button-primary">
            <ArchiveIcon className="relative h-6 w-6 fill-current stroke-transparent" />
            <span>Our Products</span>
          </a>
          <a
            href="https://instagram.com/adam_bag7/"
            target="blank"
            className="button button-tertiary">
            <ExternalLinkIcon
              strokeWidth={2}
              className="relative h-6 w-6 fill-transparent stroke-current"
            />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 bottom-auto right-auto -z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 transform flex-row items-center justify-center gap-96 transition-all">
        <div className="relative flex h-full w-full transform items-center justify-center gap-5 transition-all">
          {colors.map((color, index) => (
            <div
              key={index}
              className={[
                "relative h-96 w-10 rounded-full mix-blend-soft-light blur-xl-3",
                color.color
              ].join(" ")}
            />
          ))}
        </div>
        <div className="relative flex h-full w-full transform items-center justify-center gap-5 transition-all">
          {colors.map((color, index) => (
            <div
              key={index}
              className={[
                "relative h-96 w-10 rounded-full mix-blend-soft-light blur-xl-3",
                color.color
              ].join(" ")}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 bottom-auto right-auto -z-50 h-full min-h-[45rem] w-full overflow-hidden bg-white transition-all">
        <div className="absolute top-0 left-0 bottom-auto right-auto -z-50 flex h-full w-full flex-row items-center justify-center gap-8">
          {[...new Array(80)].map((item, index) => (
            <div
              key={index}
              className="relative h-full w-0.5 overflow-hidden border border-transparent bg-neutral-50"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 bottom-auto right-auto -z-50 flex h-full w-full flex-col items-center justify-center gap-8">
          {[...new Array(80)].map((item, index) => (
            <div
              key={index}
              className="relative h-0.5 w-full overflow-hidden border border-transparent bg-neutral-50"
            />
          ))}
        </div>
      </div>
    </header>
  )
}
