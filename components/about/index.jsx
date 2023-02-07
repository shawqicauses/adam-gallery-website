// Done Reviewing
import {ExternalLinkIcon} from "@heroicons/react/outline"
import {ArchiveIcon} from "@heroicons/react/solid"
import {useContent} from "../../context"

export default function About() {
  const {content} = useContent()

  return (
    <section className="mt-8 mb-8 pb-8 pt-8 md:mt-14 md:mb-14 md:pb-14 md:pt-14">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 xl-2:max-w-xl-7">
        <h2 className="mb-4 max-w-sm text-center text-xl-2 font-bold leading-tight -tracking-wide text-neutral-900 md:mb-8 md:max-w-lg md:text-xl-3 xl:max-w-xl xl:text-xl-4">
          {content.about && content.about.fields.title}
        </h2>
        <p className="mb-8 max-w-xl-3 text-center text-base font-normal leading-relaxed text-neutral-500 md:mb-14 md:max-w-xl-4 md:text-lg">
          {content.about && content.about.fields.description}
        </p>
        <div className="flex h-auto w-full flex-col items-stretch justify-center gap-3 sm:w-max sm:flex-row md:gap-4 xl:gap-5">
          <a
            href="#products"
            className="button button-primary sm:button-tertiary no-underline sm:focus:no-underline">
            <ArchiveIcon className="relative h-6 w-6 fill-current stroke-transparent" />
            <span>View Products</span>
          </a>
          <a
            href="https://ar-ar.facebook.com/shawqe/"
            target="blank"
            className="button button-tertiary">
            <ExternalLinkIcon
              strokeWidth={2}
              className="relative h-6 w-6 fill-transparent stroke-current"
            />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}
