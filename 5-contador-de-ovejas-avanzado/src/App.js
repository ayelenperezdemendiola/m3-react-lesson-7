import React from 'react';
import './App.css';
import SheepCounter from './components/SheepCounter';
import sheep from './components/sheep.png'
import SheepPicture from './components/SheepPictures';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      sheepPicture: []
    }
  }
  handleClickSheeps = () => {
    let moreSheeps = [...this.state.sheepPicture, { sheep }]
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        sheepPicture: moreSheeps,
      }
    }
    )
  }
  render() {
    const { sheepPicture } = this.state;
    return (
      <React.Fragment>
        <SheepCounter counter={this.state.counter} handleClickSheeps={this.handleClickSheeps} />
        <SheepPicture sheep={sheepPicture} />
      </React.Fragment>
    )
  }
}

export default App;
