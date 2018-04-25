import React, { Component } from 'react';
import FaIconPack from 'react-icons/lib/fa'
import Nav from './components/Nav';
import Bio from './components/Bio';
import FrontPage from './components/FrontPage';
import './App.css'


class App extends Component {
    handleClick (index) {
        let {characters, score, topScore} = this.state;
    
        if(!characters[index].clicked) {
          characters[index].clicked = true;
          score++;
        } else {
          characters = characters.map((character, index) => {
            character.clicked = false;
            return character;
          });
          topScore = score > topScore ? score : topScore;
          score = 0;
        }
    
        characters = this.Shuffle(characters)
    
        this.setState({
          characters, score, topScore
        });
      }

      render () {
          return (
            <div>
            <div className='bckg-img img'>
                <Nav />
                <FrontPage />
            </div>
            <div className='bio-content'>
            <Bio />
            </div>
            </div>
          )
      }
}

export default App;