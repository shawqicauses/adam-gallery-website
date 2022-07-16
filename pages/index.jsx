import { ExternalLinkIcon } from "@heroicons/react/outline"
import { ArchiveIcon } from "@heroicons/react/solid"
import { createClient } from "contentful"
import { Fragment, useEffect } from "react"
import { Header, ImageSlider, Navbar } from "../components/components"
import { useContent } from "../context"
import { classes } from "../lib/utils"

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
      <ImageSlider />
      <section
        className={classes(
          "mt-8 mb-8 pb-8 pt-8",
          "md:mt-14 md:mb-14 md:pb-14 md:pt-14"
        )}>
        <div
          className={classes(
            "container mx-auto px-5 xl-2:max-w-xl-7",
            "flex flex-col items-center justify-center"
          )}>
          <h2
            className={classes(
              "max-w-sm text-xl-2 font-bold leading-tight",
              "mb-4 text-center -tracking-wide text-neutral-900 md:mb-8",
              "md:max-w-lg md:text-xl-3",
              "xl:max-w-xl xl:text-xl-4"
            )}>
            {content.about && content.about.fields.title}
          </h2>
          <p
            className={classes(
              "max-w-xl-3 text-center text-base font-normal",
              "leading-relaxed text-neutral-500",
              "mb-8 md:mb-14 md:max-w-xl-4 md:text-lg"
            )}>
            {content.about && content.about.fields.description}
          </p>
          <div
            className={classes(
              "flex h-auto w-full flex-col",
              "items-stretch justify-center gap-3",
              "sm:w-max sm:flex-row md:gap-4 xl:gap-5"
            )}>
            <a
              href="#products"
              className={classes(
                "button button-primary sm:button-tertiary",
                "no-underline sm:focus:no-underline"
              )}>
              <ArchiveIcon
                className={classes(
                  "relative h-6 w-6",
                  "fill-current stroke-transparent"
                )}
              />
              <span>View Products</span>
            </a>
            <a
              href="https://ar-ar.facebook.com/shawqe/"
              target={"blank"}
              className={classes("button button-tertiary")}>
              <ExternalLinkIcon
                strokeWidth={2}
                className={classes(
                  "relative h-6 w-6",
                  "fill-transparent stroke-current"
                )}
              />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
