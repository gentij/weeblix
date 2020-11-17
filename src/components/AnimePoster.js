import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/animePoster.css'

const AnimePoster = ({ title, image, episode, released}) => {
    return (
        <Link to={`/anime/${title.replace(/\//g, '%2F')}`}>
            <div className="animePoster" title={title}>
                <img src={ image } alt=""/>
                <div className="animePoster__title">
                    <h3 className="animePoster__animeTitle">{ title }</h3>
                    {
                        episode ? (
                            <p className="animePoster__animeEpisode">Episode { episode }</p>
                        ) : (
                            <p className="animePoster__animeReleased">Released: { released }</p>
                        )
                    }
                </div>
            </div>
        </Link>
    )
}

export default AnimePoster
