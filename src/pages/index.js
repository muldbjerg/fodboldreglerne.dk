import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = ({ data }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
      setPosts(data.allGoogleSheetReglerneRow.nodes)
  }, [])

  return (
      <Layout>
          <SEO title="Fodboldreglerne.dk - Universelle regler fra Fodboldministeriet" />

          <h1 className="indexText">Universelle regler, nedfældet af det <br/> jammerlige talkshow <a target="_blank" rel="noreferrer" href="https://twitter.com/fodboldpodcast">Fodboldministeriet</a> </h1>

          
          {posts.map(post => (
            <Card info={post} key={"card"+post.slug} />
          ))}

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
      kommentar
    }
  }
}
`

