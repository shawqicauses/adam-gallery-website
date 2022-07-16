import { createClient } from "contentful"
import { Fragment, useEffect } from "react"
import { About, Header, ImageSlider, Navbar } from "../components/components"
import { useContent } from "../context"

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
      <About />
    </Fragment>
  )
}

export default Home
