import { createClient } from "contentful"
import Image from "next/image"
import { Fragment, useEffect } from "react"
import { Header, Navbar } from "../components/components"
import { useContent } from "../context"
import { classes, url } from "../lib/utils"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
  })

  const about = await client.getEntries({ content_type: "about" })
  const products = await client.getEntries({ content_type: "product" })
  const advisements = await client.getEntries({ content_type: "advisements" })
  const social = await client.getEntries({ content_type: "social" })

  return {
    props: {
      about: about.items[0],
      products: products.items,
      advisements: advisements.items,
      social: social.items
    },
    revalidate: 10
  }
}

function Home({ about, products, advisements, social }) {
  const { content, setContent } = useContent()
  useEffect(
    () =>
      setContent(previous => ({
        ...previous,
        about,
        products,
        advisements,
        social
      })),

    [setContent, about, products, advisements, social]
  )

  return (
    <Fragment>
      <Navbar />
      <Header />
      <section className={classes("-mt-10 mb-10 px-5 sm:-mt-20 sm:mb-20")}>
        <div
          className={classes(
            "container mx-auto px-5 xl-2:max-w-xl-7",
            "flex flex-row items-center justify-start gap-5",
            "no-scrollbar h-full snap-x overflow-x-auto"
          )}>
          {content.products &&
            content.products.map(item => (
              <div key={item.sys.id} className={classes("snap-start")}>
                <div
                  className={classes(
                    "relative aspect-square w-[18.75rem]",
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
    </Fragment>
  )
}

export default Home
