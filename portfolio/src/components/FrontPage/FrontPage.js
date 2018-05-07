import React from 'react';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down'
import TiPen from'react-icons/lib/ti/pen'
import './FrontPage.css';

class FrontPage extends React.Component {
    render () {
        return(
            <div className='front-content'>
                <div className='mid-content'>
                    <div className='headers'>
                        <h2>HI I'm Ray. I design & build</h2>
                        <h3>Web Applications & User Interface</h3>
                    </div>
                    <div className='head-center'>
                        <a href='#'>
                        <button><p>Yes I'm available for Hire </p><span><TiPen /></span></button>
                        </a>
                    </div>
                </div>
                <div className='head-bottom'>
                    <div className='fp-footer'>
                        <a href='#'>
                        <p>Learn about what I do </p>
                        <FaAngleDoubleDown />
                        </a>
                    </div>
                </div>
           </div>
        )
    }
}

export default FrontPage