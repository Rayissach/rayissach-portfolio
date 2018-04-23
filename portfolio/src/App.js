import React, { Component } from 'react';
import Nav from './components/Nav';
import Bio from './components/Bio';
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
            <div className='bckg-img'>
                <Nav />
                <Bio />
            </div>
          )
      }
}

export default App;