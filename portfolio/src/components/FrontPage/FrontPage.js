import React from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down'
import './FrontPage.css';

class FrontPage extends React.Component {
    render () {
        return(
            <div className='front-content'>
            <div className='headers'>
            <h2>HI I'm Ray. I design & build</h2>
            <h3>Web Applications & User Interface</h3>
            </div>
            <div className='head-center'>
                <button>Yes I'm available for Hire</button>
            </div>
            <div className='head-bottom'>
                <p>Learn about what I do </p>
                <FaAngleDoubleDown />
            </div>
           </div>
        )
    }
}

export default FrontPage