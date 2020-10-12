import React, { useState, useEffect } from 'react'

import { getMovies } from '../axios'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Movies = () => {
    const [movies, setMovies] = useState('')
    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getMovies(page, setMovies, setLoading)
    }, [page])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Movies</h3>
                <Controls 
                    page = {page} 
                    setPage = {setPage} 
                    isLoading = {loading}
                />
                {
                    loading ? (
                        <LoaderContainer />
                    ) : (
                        <AnimeContainer data = {movies.data}/>
                    )
                }
            </div>
        </div>
    )
}

export default Movies
