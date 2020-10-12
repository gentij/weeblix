import React from 'react'

import ReactLoading from 'react-loading';

import '../../styles/animePoster.css'

const AnimePoster = () => {
    return (
        <div className="animePoster">
            <ReactLoading type="cylon" className="loader" height="100%" width="100%" color="#A21E2D"/>
            <div className="animePoster__title">
                <p className="animePoster__animeEpisode">loading...</p>
            </div>
        </div>
    )
}

export default AnimePoster
