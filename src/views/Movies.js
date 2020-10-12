import React, { useState, useEffect } from 'react'

import { getMovies } from '../axios'

import AnimeContainer from '../components/AnimeContainer'

import '../styles/home.css'

const Movies = () => {
    const [movies, setMovies] = useState('')

    useEffect(() => {
        getMovies(1, setMovies)
    }, [])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Movies</h3>
                <AnimeContainer data = {movies.data}/>
            </div>
        </div>
    )
}

export default Movies
