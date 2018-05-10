import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render () {
        return (
            <div className='header-cont'>
            <div className='brand'>
                <a href='#'>
                Ray
                </a>
            </div>
            <div className='right-bar'>
            <ul>
            <li>
                    <a href='#'>
                    Social Medias
                    </a>
                </li>
                <li className='dropdown'>
                    <a href='#'>
                    Projects
                    </a>
                    <div className='project-content'>
                        <a href='#'>React and DB</a>
                        <a href='#'>Mongo DB</a>
                        <a href='#'>NodeJS </a>
                        <a href='#'>MySQL</a>
                    </div>
                </li>
                <li>
                    <a href='#'>
                    Bio
                    </a>
                </li>
            </ul>
            </div>
            </div>
        )
    }
}

export default Nav;