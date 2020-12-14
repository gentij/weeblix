import React, { useState, useEffect } from 'react'

import { getPopular } from '../axios'

import { useParams } from 'react-router-dom'

import Grow from '@material-ui/core/Grow'

import AnimeContainer from '../components/AnimeContainer'
import LoaderContainer from '../components/Loader/LoaderContainer'
import Controls from '../components/Controls'

import '../styles/home.css'

const Popular = () => {
    let params = useParams().id
    const [pageIndex, setPageIndex] = useState(Number(params))

    const [popular, setPopular] = useState('')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setPageIndex(Number(params))
        setLoading(true)
        getPopular(Number(params), setPopular, setLoading)
    }, [params])

    return (
        <Grow in={true}>
            <div className="container">
                <div className="animeContainer__wrapper">
                    <h3 className="animeContainer__title">Popular series</h3>
                    <Controls 
                        page = {pageIndex} 
                        setPage = {setPageIndex} 
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
        </Grow>
    )
}

export default Popular
