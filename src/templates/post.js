import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const featuredImage = data.wpPost.featuredImage?.node?.localFile
  return (
    <Layout>
      <Seo title="Home" />
      <GatsbyImage image={featuredImage.childImageSharp.gatsbyImageData} />
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
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
