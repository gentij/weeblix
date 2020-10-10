import React from 'react'

import '../styles/header.css'

import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__left">
                    <h1>weeb<span>lix</span></h1>
                </div>
                <div className="header__right">
                    <IconButton>
                        <p>search...</p>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </header>
    )
}

export default Header
