import React, { useState, useEffect } from 'react'

import { getRecentEpisodes } from '../axios'

import { useParams } from 'react-router-dom'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Home = () => {
    let { id } = useParams()
    let pageIndex = id.split('=')

    console.log(Number(pageIndex[0]));

    const [recentEpisodes, setRecentEpisodes] = useState('')
    const [page, setPage] = useState(Number(pageIndex[0]));

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getRecentEpisodes(page, setRecentEpisodes, setLoading)
    }, [page])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Recent episodes</h3>
                <Controls 
                    page = {page} 
                    setPage = {setPage} 
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
    )
}

export default Home
