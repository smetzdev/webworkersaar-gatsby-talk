import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <ul>
        {posts.map((post, key) => (
          <li>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
        title
        slug
      }
    }
  }
`

export default IndexPage
