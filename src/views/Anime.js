import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import 'react-modal-video/scss/modal-video.scss';

import ModalVideo from 'react-modal-video'

import ReactLoading from 'react-loading';

import { search, animeEpisodeHandler } from '../axios'

import '../styles/anime.css'

const Anime = () => {
    const [isOpen, setOpen] = useState(false)
    let watchedEpisodes = document.querySelectorAll('.currentEpisode') || []

    let params = useParams().title
    
    const [anime, setAnime] = useState()
    const [playing, setPlaying] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        search(params, setAnime, setIsLoading)
    }, [params])

    const playEpisode = (e, id) => {
        if(watchedEpisodes) {
            watchedEpisodes.forEach(button => {
                button.className = "watchedEpisode"
            })
        }
        e.target.className = "currentEpisode"
        animeEpisodeHandler(id, setPlaying, setOpen)
    }

    return (
        <div className="container">
            {
                !isLoading ? (
                    <>
                    <div className="anime__info__wrapper">
                        <img src={anime.data[0].img} alt=""/>
                        <div className="anime__info">
                            <div className="anime__info__top">
                                <h2 className="anime__info__title">{ anime.data[0].title }</h2>
                                <p>Released: { anime.data[0].released }</p>
                                <div className="anime__info__genres">
                                    {
                                        anime.data[0].genres.map((element, index) => (
                                            <p key={index}>{element}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="anime__info__description">
                                <p>{ anime.data[0].synopsis }</p>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='custom' url={playing ? `https://${playing.data[0].servers[0].iframe}` : ''} autoplay isOpen={isOpen} onClose={() => setOpen(false)} />
                    <div className="anime__episodes">
                        <h2>Episodes:</h2>
                        <div className="anime__episodes__container">
                            {
                                anime.data[0].episodes.map((element, index) => (
                                    <div key={index}>
                                        <button onClick={(e)=> playEpisode(e, element.id)}>{ index + 1 }</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="loadingContainer">
                        <ReactLoading type="spin" className="loader" height="100px" width="100px" color="#A21E2D"/>
                    </div>
                )
            }
        </div>
    )
}

export default Anime
