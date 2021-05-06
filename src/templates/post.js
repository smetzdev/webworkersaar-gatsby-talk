import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>{data.wpPost.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`

export default IndexPage
