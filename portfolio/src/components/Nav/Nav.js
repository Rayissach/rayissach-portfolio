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
                    Bio
                    </a>
                </li>
                <li className='dropdown'>
                    <a href='#'>
                    Projects
                    </a>
                    <div className='project-content'>
                        <a href='#'>Project 1</a>
                        <a href='#'>Project 2</a>
                        <a href='#'>Preoject 3</a>
                        <a href='#'>Project 4</a>
                    </div>
                </li>
                <li>
                    <a href='#'>
                    Social Medias
                    </a>
                </li>
            </ul>
            </div>
            </div>
        )
    }
}

export default Nav;