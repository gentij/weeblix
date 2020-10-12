import React from 'react'

import '../styles/animePoster.css'

const AnimePoster = ({ title, image, episode}) => {
    return (
        <div className="animePoster">
            <img src={ image } alt=""/>
            <div className="animePoster__title">
                <h3 className="animePoster__animeTitle">{ title }</h3>
                <p className="animePoster__animeEpisode">Episode { episode }</p>
            </div>
        </div>
    )
}

export default AnimePoster
