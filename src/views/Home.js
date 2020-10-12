import React, { useState, useEffect } from 'react'

import { getRecentEpisodes, getOngoing } from '../axios'

import AnimeContainer from '../components/AnimeContainer'

import '../styles/home.css'

const Home = () => {
    const [recentEpisodes, setRecentEpisodes] = useState('')
    const [ongoing, setOngoing] = useState('')

    useEffect(() => {
        getRecentEpisodes(setRecentEpisodes)
        getOngoing(setOngoing)
    }, [])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Recent episodes</h3>
                <AnimeContainer data = {recentEpisodes.data}/>
            </div>
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Ongoing series</h3>
                <AnimeContainer data = {ongoing.data}/>
            </div>
        </div>
    )
}

export default Home
