import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Link, useLocation } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ReactLoading from 'react-loading';

import { animeEpisodeHandler } from '../axios'

import '../styles/watch.css'

const Watch = () => {
    let params = useParams().episode
    
    const [episode, setEpisode] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        animeEpisodeHandler(params, setEpisode, setIsLoading)
    }, [params])

    let episodeIndex = params.lastIndexOf('-', params.length) + 1

    const[episodeNumber, setEpisodeNumber] = useState(Number(params.substring(episodeIndex, params.length)))

    let lastIndex = params.lastIndexOf('-', params.length - 5)

    let title = params.substring(0, lastIndex)

    const prev = () => {
        if(!(episodeNumber === 1 || isLoading)) {
            setEpisodeNumber(episodeNumber - 1)
        }
    }

    const next = () => {
        if(!isLoading) {
            setEpisodeNumber(episodeNumber + 1)
        }
    }

    console.log(title);
    return (
        <div className="container">
            {
                !isLoading ? (
                    <div className="episode__wrapper">    
                        <div className="anime__info__wrapper">
                            <img src={episode.data[0].img} alt=""/>
                            <div className="anime__info">
                                <div className="anime__info__top">
                                    <h3 className="anime__info__title">{ title }</h3>
                                    <p>Released: { episode.data[0].released }</p>
                                    <div className="anime__info__genres">
                                        {
                                            episode.data[0].genres.map((element, index) => (
                                                <p key={index}>{element}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="anime__info__description">
                                    <p>{ episode.data[0].synopsis }</p>
                                </div>
                            </div>
                        </div>  
                        <div className="controls">
                        <IconButton
                            disabled = {episodeNumber === 1 || isLoading ? true : false}
                            onClick={() => prev()}
                        >
                            <Link to={`${title}-episode-${episodeNumber - 1}`} className={episodeNumber === 1 || isLoading ? 'inactive' : ''}>
                                <ArrowBackIosIcon/>
                            </Link>
                        </IconButton>
                            <p>Episode { episodeNumber }</p>
                        <IconButton
                            disabled = {isLoading ? true : false}
                            onClick={() => next()}
                        >
                            <Link to={`${title}-episode-${episodeNumber + 1}`} className={isLoading ? 'inactive' : ''}>
                                <ArrowForwardIosIcon/>
                            </Link>
                        </IconButton>
                        </div>
                        <div className="iframe__wrapper">
                            <iframe 
                                src={`https://${episode.data[0].servers[0].iframe}`}
                                frameBorder="0" 
                                allowFullScreen
                                >
                            </iframe>
                        </div>
                    </div>
                ) : (
                    <ReactLoading type="spin" className="loader" height="100px" width="100px" color="#A21E2D"/>
                )
            }
        </div>
    )
}

export default Watch
