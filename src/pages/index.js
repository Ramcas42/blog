import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<h1>Home Page</h1>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          title
          date
          author
          path
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
