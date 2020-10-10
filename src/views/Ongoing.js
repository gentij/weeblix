import React from 'react'

import AnimeContainer from '../components/AnimeContainer'

import '../styles/home.css'

const Ongoing = () => {
    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Ongoing series</h3>
                <AnimeContainer />
            </div>
        </div>
    )
}

export default Ongoing
