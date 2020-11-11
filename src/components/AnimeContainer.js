import React from 'react'

import AnimePoster from './AnimePoster'

import '../styles/animeContainer.css'

const AnimeContainer = ({ data }) => {
    return (
        <div className="animeContainer">
            {
                data ? (
                    data.map((anime, index) => (
                        <AnimePoster 
                            key = {index}
                            title = {anime.title}
                            image = {anime.img}
                            episode = {anime.episode}
                            released = {anime.released}
                        />
                    ))
                ) : (
                    false
                )
            }
        </div>
    )
}

export default AnimeContainer
