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
      <StaticImage layout="fullWidth" src="https://picsum.photos/1280/720" />
      <blockquote style={{ marginTop: "16px" }}>{data.joke.value}</blockquote>
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
    joke {
      value
    }
  }
`

export default IndexPage
