import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div className='projectContent'>
                <div className='projectHeader'>
                    <h1>Projects</h1>
                </div>
                <div className='projectFiles'>
                    <div className='projectImages'>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg1' src='./port-img1.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg2' src='./port-img2.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg3' src='./port-img3.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg4' src='./port-img4.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'> 
                            <img className='portImages' id='portImg5' src='./port-img5.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg6' src='./port-img6.jpg' />
                            <header className='postHead'>
                                <p>This is project #1 this project is made with react</p>
                            </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg7' src='./port-img7.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                        <div className='projectBottomImg'>
                            <img className='portImages' id='portImg8' src='./port-img8.jpg' />
                                <header className='postHead'>
                                    <p>This is project #1 this project is made with react</p>
                                </header>
                        </div>
                    </div>
                </div>
                <div className='projectFooter'>
                    <div className='projectFooterText'>
                        <p> These are the all of my projects from most important to least important.</p>
                        <p>Projects show stationary picture of project. Then on hover the projects show a gif of the file along with text about the project with a trasnsparent background.</p> 
                        <p>This then takes you to a github page when clicked</p>
                    </div>
                </div>
        </div>
        )
    }

}

export default Projects;