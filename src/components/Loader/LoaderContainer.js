import React from 'react'

import AnimePoster from './LoadingPoster'

import '../../styles/animeContainer.css'

const LoaderContainer = () => {
    const loaders = 20;

    return (
        <div className="animeContainer">
            {
                [...Array(loaders)].map((loader, index) => (
                    <AnimePoster key={ index }/>
                ))
            }
        </div>
    )
}

export default LoaderContainer