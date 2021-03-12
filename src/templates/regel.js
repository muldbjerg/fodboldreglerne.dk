import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import "./regel.css"

const Regel = ({ data }) => {

    const regel = data.googleSheetReglerneRow    
    return (

        <Layout>
            <SEO title={ regel.navn + " → Fodboldreglerne.dk"} description={regel.regeltekst} />

            <div  className="regelSide">
                <h1 className="regelTitle">
                    { regel.navn }  
                </h1>
                <div className="regelTekst">
                    { regel.regeltekst }
                </div>
                <div className="metaData">
                    {regel.episode && regel.episodeurl &&
                        <p>Nævnt i <a target="_blank" rel="noreferrer" href={regel.episodeurl}>{regel.episode}</a></p>
                    }
                    {regel.episode && !regel.episodeurl &&
                        <p>Nævnt i {regel.episode}</p>
                    }
                    {regel.kommentar &&
                        <p dangerouslySetInnerHTML={{__html: regel.kommentar }}></p>
                    }
                    {regel.hinter && !regel.hinterurl &&
                        <p>Hintet af {regel.hinter}</p>
                    }
                    {regel.hinter && regel.hinterurl &&
                        <p>Hintet af <a target="_blank" rel="noreferrer" href={regel.hinterurl}>{regel.hinter}</a></p>
                    }
                </div>

                <div className="alleRegler">
                    <Link to="/">Se alle reglerne</Link>
                </div>


                <div className="linje"></div>
                
            </div>
        </Layout>
        
    )
}

export const query = graphql`
    query($slug: String!) {
        googleSheetReglerneRow(slug: { eq: $slug }) {
            regeltekst
            navn
            episode
            episodeurl
            hinter
            hinterurl
            kommentar
        }
    }
`


export default Regel
