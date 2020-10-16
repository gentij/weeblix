import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

import ReactLoading from 'react-loading';

import { search } from '../axios'

import '../styles/anime.css'

const Anime = () => {
    let params = useParams().title
    
    const [anime, setAnime] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        search(params, setAnime, setIsLoading)
    }, [params])

    console.log(params);
    console.log(anime);
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
                    <div className="anime__episodes">
                        <h2>Episodes:</h2>
                        <div className="anime__episodes__container">
                            {
                                anime.data[0].episodes.map((element, index) => (
                                    <div key={index}>
                                        <Link to={`/watch/${element.id}`}>
                                            <button>{ index + 1 }</button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    </>
                ) : (
                    <ReactLoading type="spin" className="loader" height="100px" width="100px" color="#A21E2D"/>
                )
            }
        </div>
    )
}

export default Anime
