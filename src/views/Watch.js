import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { search } from '../axios'

const Watch = () => {
    let params = useParams().title
    
    const [anime, setAnime] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        search(params, setAnime, setIsLoading)
    }, [params])

    console.log(anime);
    console.log(params);
    return (
        <div>
            <h1>Watch</h1>
        </div>
    )
}

export default Watch
