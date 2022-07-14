import { createClient } from "contentful"
import { Fragment } from "react"
import { Header, Navbar } from "../components/components"

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
  console.log(about, products, advisements, social)
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  )
}

export default Home
