import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/controls.css'

const Controls = ({ page, setPage, isLoading }) => {
    let [route] = useLocation().pathname.split("=")

    const prev = () => {
        if(!(page === 1 || isLoading)) {
            setPage(page - 1)
        }
    }

    const next = () => {
        if(!isLoading) {
            setPage(page + 1)
        }
    }

    return (
        <div className="controls">
            <IconButton
                disabled = {page === 1 || isLoading ? true : false}
                onClick={() => prev()}
            >
                <Link to={`${route}=${page - 1}`} className={page === 1 || isLoading ? 'inactive' : ''}>
                    <ArrowBackIosIcon/>
                </Link>
            </IconButton>
            <p>{ page }</p>
            <IconButton
                disabled = {isLoading ? true : false}
                onClick={() => next()}
            >
                <Link to={`${route}=${page + 1}`} className={isLoading ? 'inactive' : ''}>
                    <ArrowForwardIosIcon/>
                </Link>
            </IconButton>
        </div>
    )
}

export default Controls
