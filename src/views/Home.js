import React from 'react'

import AnimeContainer from '../components/AnimeContainer'

import '../styles/home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Recent episodes</h3>
                <AnimeContainer />
            </div>
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Recently added series</h3>
                <AnimeContainer />
            </div>
        </div>
    )
}

export default Home
