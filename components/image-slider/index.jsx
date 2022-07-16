import Image from "next/image"
import { useContent } from "../../context"
import { classes, url } from "../../lib/utils"

function ImageSlider() {
  const { content } = useContent()

  return (
    <section className={classes("-mt-8 mb-8 px-5 md:-mt-14 md:mb-14")}>
      <div
        className={classes(
          "container mx-auto xl-2:max-w-xl-7",
          "flex flex-row items-center justify-start gap-5",
          "no-scrollbar h-full snap-x overflow-x-auto"
        )}>
        {content.products &&
          content.products.map(item => (
            <div key={item.sys.id} className={classes("snap-start")}>
              <div
                className={classes(
                  "relative aspect-square w-[19.0625rem]",
                  "overflow-hidden rounded-lg"
                )}>
                <Image
                  src={url(item.fields.image.fields.file.url)}
                  alt={item.fields.image.fields.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default ImageSlider
