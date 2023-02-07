// Done Reviewing
import Image from "next/image"
import {useContent} from "../../context"
import {url} from "../../lib/utils"

export default function Products() {
  const {content} = useContent()
  return (
    <section className="mt-8 mb-8 pb-8 pt-8 md:mt-14 md:mb-14 md:pb-14 md:pt-14">
      <div className="container mx-auto grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-2:max-w-xl-7">
        {content.products &&
          content.products.map((item) => (
            <div key={item.sys.id} className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={url(item.fields.image.fields.file.url)}
                  alt={item.fields.image.fields.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="absolute right-5 bottom-5 inline-block rounded-lg bg-white py-3 px-3 text-base font-medium leading-none -tracking-wide text-zinc-900 shadow-lg">
                {item.fields.price} ILS
              </span>
            </div>
          ))}
      </div>
    </section>
  )
}
