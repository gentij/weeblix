import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import ReactLoading from 'react-loading';

import { animeEpisodeHandler } from '../axios'

const Watch = () => {
    let params = useParams().episode
    
    const [episode, setEpisode] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        animeEpisodeHandler(params, setEpisode, setIsLoading)
    }, [params])

    console.log(episode);
    return (
        <div>
            {
                !isLoading ? (
                    <iframe 
                        src={`https://${episode.data[0].servers[0].iframe}`}
                        width="500px"  
                        height="400px" 
                        frameBorder="0" 
                        allowFullScreen
                        >
                    </iframe>
                ) : (
                    <ReactLoading type="spin" className="loader" height="100px" width="100px" color="#A21E2D"/>
                )
            }
        </div>
    )
}

export default Watch
