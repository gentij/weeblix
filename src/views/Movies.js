import React, { useState, useEffect } from 'react'

import { getMovies } from '../axios'

import Grow from '@material-ui/core/Grow'

import { useParams } from 'react-router-dom'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Movies = () => {
    let params = useParams().id
    const [pageIndex, setPageIndex] = useState(Number(params))

    const [movies, setMovies] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPageIndex(Number(params))
        setLoading(true)
        getMovies(Number(params), setMovies, setLoading)
    }, [params])

    return (
        <Grow in={true}>
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Movies</h3>
                <Controls 
                    page = {pageIndex} 
                    setPage = {setPageIndex} 
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
        </Grow>
    )
}

export default Movies
