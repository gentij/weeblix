import React from 'react'

import '../styles/footer.css'

import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpwardOutlined';

const Footer = () => {
    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer>
            <div className="footerContainer">
                <p><span>weeb</span>lix | { year }</p>
                <IconButton>
                    <ArrowUpwardIcon />
                </IconButton>
            </div>
        </footer>
    )
}

export default Footer
