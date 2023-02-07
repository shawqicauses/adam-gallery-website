// Done Reviewing
import {useContent} from "../../context"

export default function Footer() {
  const {content} = useContent()
  return (
    <footer className="mt-8 pb-8 pt-8 md:mt-14 md:pb-14 md:pt-14">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:gap-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 max-w-sm text-center text-xl-2 font-bold leading-tight -tracking-wide text-neutral-900 md:mb-8 md:max-w-lg md:text-xl-3 xl:max-w-xl xl:text-xl-4">
              We have various collections of our products. Browse them
            </h2>
            <span className="text-xl font-semi-bold uppercase not-italic leading-none tracking-[0.2em] text-neutral-900 no-underline decoration-inherit">
              Adam
            </span>
          </div>
          <div className="flex w-full flex-col flex-wrap items-center justify-between gap-10 sm:flex-row sm:gap-5">
            <ul className="hidden w-full flex-1 flex-col items-center justify-center gap-3 sm:flex sm:w-max lg:relative lg:flex-initial lg:flex-row lg:gap-10">
              {[
                {name: "Home", link: "#home"},
                {name: "About", link: "#about"},
                {name: "Products", link: "#products"},
                {name: "Contact", link: "#contact"}
              ].map((link) => (
                <li
                  key={link.name}
                  className="flex h-auto w-full cursor-pointer flex-row items-center justify-center gap-0 transition-all">
                  <a
                    href={link.link}
                    className="inline-block w-full transform cursor-pointer truncate rounded-lg border-2 border-neutral-100 px-5 py-5 text-center text-lg font-medium leading-none text-neutral-500 no-underline outline-none transition-all ease-in hover:-translate-y-1 hover:text-neutral-900 focus:translate-y-0.5 focus:text-neutral-900 lg:rounded-none lg:border-none lg:p-0">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex w-full flex-1 flex-col items-center justify-center gap-3 sm:w-max lg:relative lg:flex-initial lg:flex-row lg:gap-10">
              {content.social &&
                content.social.map((link) => (
                  <li
                    key={link.fields.name}
                    className="flex h-auto w-full cursor-pointer flex-row items-center justify-center gap-0 transition-all">
                    <a
                      href={link.fields.link}
                      className="inline-block w-full transform cursor-pointer truncate rounded-lg border-2 border-neutral-100 px-5 py-5 text-center text-lg font-medium leading-none text-neutral-500 no-underline outline-none transition-all ease-in hover:-translate-y-1 hover:text-neutral-900 focus:translate-y-0.5 focus:text-neutral-900 lg:rounded-none lg:border-none lg:p-0">
                      {link.fields.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
