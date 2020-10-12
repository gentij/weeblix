import React, { useState, useEffect } from 'react'

import { getPopular } from '../axios'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Popular = () => {
    const [popular, setPopular] = useState('')
    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getPopular(page, setPopular, setLoading)
    }, [page])

    return (
        <div className="container">
            <div className="animeContainer__wrapper">
                <h3 className="animeContainer__title">Popular series</h3>
                <Controls 
                    page = {page} 
                    setPage = {setPage} 
                    isLoading = {loading}
                />
                {
                    loading ? (
                        <LoaderContainer />
                    ) : (
                        <AnimeContainer data = {popular.data}/>
                    )
                }
            </div>
        </div>
    )
}

export default Popular
