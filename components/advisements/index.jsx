// Done Reviewing
import {ArchiveIcon} from "@heroicons/react/solid"
import {useContent} from "../../context"

export default function Advisements() {
  const {content} = useContent()
  return (
    <section className="mt-8 mb-8 pb-8 pt-8 md:mt-14 md:mb-14 md:pb-14 md:pt-14">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div
          className="flex flex-col items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat px-5 py-10 sm:px-10 sm:py-20 md:px-20 md:py-40"
          style={{
            backgroundImage: [
              "linear-gradient(45deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),",
              `url(${
                content.advisements &&
                content.advisements[0].fields.image.fields.file.url
              })`
            ].join("")
          }}>
          <h2 className="mb-4 max-w-lg text-center text-xl-4 font-extra-bold leading-[1.15] tracking-tight text-white md:mb-8 md:max-w-xl-2 md:text-xl-5 xl:max-w-xl-4 xl:text-xl-6">
            {content.advisements && content.advisements[0].fields.title}
          </h2>
          <div className="flex h-auto w-full flex-col items-stretch justify-center gap-3 sm:w-max sm:flex-row md:gap-4 xl:gap-5">
            <a
              href={content.advisements && content.advisements[0].fields.path}
              target="blank"
              className="button button-white">
              <ArchiveIcon className="relative h-6 w-6 fill-current stroke-transparent" />
              <span>
                {content.advisements && content.advisements[0].fields.link}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
