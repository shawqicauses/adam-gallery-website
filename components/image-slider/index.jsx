// Done Reviewing
import Image from "next/image"
import {useContent} from "../../context"
import {url} from "../../lib/utils"

export default function ImageSlider() {
  const {content} = useContent()
  return (
    <section className="-mt-8 mb-8 px-5 md:-mt-14 md:mb-14">
      <div className="container mx-auto flex h-full snap-x flex-row items-center justify-start gap-5 overflow-x-auto px-5 xl-2:max-w-xl-7">
        {content.products &&
          content.products.map((item) => (
            <div key={item.sys.id} className="relative snap-start">
              <div className="relative aspect-square w-[19.0625rem] overflow-hidden rounded-lg">
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
