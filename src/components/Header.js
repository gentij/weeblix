import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/header.css'

import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__left">
                    <h1>weeb<span>lix</span></h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/popular">Popular</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                        </ul>
                    </nav>
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
