import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import InfoCard from './components/InfoCard';
import './App.css';

class App extends Component {

  state={
    currentScore:0,
    topScore:0,
    imageSources:[
      "https://picsum.photos/160/160/?image=872",
      "https://picsum.photos/160/160/?image=871",
      "https://picsum.photos/160/160/?image=870",
      "https://picsum.photos/160/160/?image=869",
      "https://picsum.photos/160/160/?image=868",
      "https://picsum.photos/160/160/?image=867",
      "https://picsum.photos/160/160/?image=866",
      "https://picsum.photos/160/160/?image=865",
      "https://picsum.photos/160/160/?image=864",
      "https://picsum.photos/160/160/?image=863",
      "https://picsum.photos/160/160/?image=862",
      "https://picsum.photos/160/160/?image=861",
    ],
    imagesPlayed:[]
  }

  picPressed = (chosenPic) =>{
    
    let {currentScore,topScore,imagesPlayed} = this.state;  
    let newImages = [...this.state.imagesPlayed];
    newImages.push(chosenPic);
    console.log(newImages)

    if(imagesPlayed.includes(chosenPic)){
      //when they lose, I need to set their current score to 0 and clear the images playe
      newImages=[];
      this.setState({currentScore:0, imagesPlayed:newImages});
    }else{
      //when they're correct, I add one to current score and I update top score if 
      currentScore+=1;
      this.setState({
        currentScore:currentScore,
      });
      if (currentScore>topScore) this.setState({topScore:currentScore});
    }
    
    this.setState({imagesPlayed:newImages});
    this.reShuffle(this.state.imageSources);
  }

  reShuffle = (arrayToShuffle) =>{

    // Durstenfeld shuffle, a computer-optimized version of Fisher-Yates
    for (var i = arrayToShuffle.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrayToShuffle[i];
      arrayToShuffle[i] = arrayToShuffle[j];
      arrayToShuffle[j] = temp;
    }
    
    //------------- ES6 Equivalent -------------
    // for (let i = array.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [array[i], array[j]] = [array[j], array[i]];
    // }
    
  }

  render() {
    return (
      <div>
        <Navbar topScore={this.state.topScore} />
        <InfoCard currentScore={this.state.currentScore}/>
        <PhotoGrid currentShuffle={this.state.imageSources} picPressed={this.picPressed}/>
        <Footer />
      </div>
    )
  }
}

export default App;