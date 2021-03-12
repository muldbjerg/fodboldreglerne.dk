import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import copy from 'copy-text-to-clipboard';


import "./card.css"

const Card = ({ info }) => {
    const [open, setOpen] = useState(false);
    const [linkShared, setLinkShared] = useState(false);
    const baseUrl = window.location.origin;

    const toggleRow = () => {
        setOpen(!open);
    };

    const showLinkShared = () => {
        setLinkShared(!linkShared);
        setTimeout(function(){ 
            setLinkShared(!linkShared);
        }, 3000);
    };

    const delRegel = () => {
        if(copy(baseUrl + "/" + info.slug)){
            showLinkShared();
            console.log("kopieret");
        };
    }

    return (
        <div className={'card ' + (open ? ' open' : '')} >
            <div className="topRow" onClick={toggleRow}>
                <h2>{info.navn}</h2>
                <div className="toggleSign">
                    {(open ? ' ÷' : '+')}
                </div>
            </div>
            <div className="cardContent">
                <div>{info.regeltekst}</div>
                <div className="metaData"> 
                    {info.episode && info.episodeurl &&
                        <p>Nævnt i <a target="_blank" rel="noreferrer" href={info.episodeurl}>{info.episode}</a></p>
                    }
                    {info.episode && !info.episodeurl &&
                        <p>Nævnt i {info.episode}</p>
                    }
                    {info.episode && info.hinter &&
                        <span>·</span>
                    }
                    {info.hinter && !info.hinterurl &&
                        <p>Hintet af {info.hinter}</p>
                    }
                    {info.hinter && info.hinterurl &&
                        <p>Hintet af <a target="_blank" rel="noreferrer" href={info.hinterurl}>{info.hinter}</a></p>
                    }
                </div>
                <div className="delRegel">
                    <a className="btn" onClick={delRegel}>Del reglen</a>
                    <span className={(linkShared ? 'active' : '')}>Link til reglen er kopieret</span>
                </div>
            </div>
        </div>
    )
}


export default Card
