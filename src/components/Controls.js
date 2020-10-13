import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/controls.css'

const Controls = ({ page, setPage, isLoading }) => {
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
                <ArrowBackIosIcon/>
            </IconButton>
            <p>{ page }</p>
            <IconButton 
                disabled = {isLoading ? true : false}
                onClick={() => next()}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    )
}

export default Controls
