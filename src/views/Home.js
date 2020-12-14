import React, { useState, useEffect } from 'react'

import { getRecentEpisodes } from '../axios'

import { useParams } from 'react-router-dom'

import Grow from '@material-ui/core/Grow'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Home = () => {
    let params = useParams().id
    const [pageIndex, setPageIndex] = useState(Number(params))


    const [recentEpisodes, setRecentEpisodes] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPageIndex(Number(params))
        setLoading(true)
        getRecentEpisodes(Number(params), setRecentEpisodes, setLoading)
    }, [params])

    return (
        <Grow in={true}>
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Recent episodes</h3>
                <Controls 
                    page = {pageIndex} 
                    setPage = {setPageIndex} 
                    isLoading = {loading}
                />
                {
                    loading ? (
                        <LoaderContainer />
                    ) : (
                        <AnimeContainer 
                            data = {recentEpisodes.data}
                        />
                    )
                }
            </div>
        </div>
        </Grow>
    )
}

export default Home
