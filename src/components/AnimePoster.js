import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/animePoster.css'

const AnimePoster = ({ title, image, episode}) => {
    return (
        <Link to={`/anime/${title}`}>
            <div className="animePoster">
                <img src={ image } alt=""/>
                <div className="animePoster__title">
                    <h3 className="animePoster__animeTitle">{ title }</h3>
                    <p className="animePoster__animeEpisode">Episode { episode }</p>
                </div>
            </div>
        </Link>
    )
}

export default AnimePoster
