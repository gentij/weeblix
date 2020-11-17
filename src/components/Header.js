import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../styles/header.css'

import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Header = () => {
    let [route] = useLocation().pathname.split("=")

    return (
        <header>
            <div className="header__container">
                <div className="header__left">
                    <h1>weeb<span>lix</span></h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home/page=1" className={route === '/home/page' ? 'active' : ''}>Home</Link>
                            </li>
                            <li>
                                <Link to="/popular/page=1" className={route === '/popular/page' ? 'active' : ''}>Popular</Link>
                            </li>
                            <li>
                                <Link to="/movies/page=1" className={route === '/movies/page' ? 'active' : ''}>Movies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right">
                    <Link to="/search">
                        <IconButton className={route === '/search' ? 'active' : ''}>
                            <p>search...</p>
                            <SearchOutlinedIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
