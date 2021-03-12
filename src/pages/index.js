import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Card from "../components/card"

import "./index.css"

const IndexPage = ({ data }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
      setPosts(data.allGoogleSheetReglerneRow.nodes)
  }, [])

  return (
      <Layout>
          <h1 className="indexText">Universelle regler, nedfældet af det <br/> jammerlige talkshow <a target="_blank" rel="noreferrer" href="https://twitter.com/fodboldpodcast">Fodbold Ministeriet</a> </h1>
          {/* <SEO title="Home" /> */}
          
          {posts.map(post => (
            <Card info={post} key={post.name} />
          ))}
          {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
  )
}
export default IndexPage

export const query = graphql`
{
  allGoogleSheetReglerneRow(sort: {order: ASC, fields: navn}) {
    nodes {
      regeltekst
      navn
      slug
      episode
      episodeurl
      hinter
      hinterurl
    }
  }
}
`

