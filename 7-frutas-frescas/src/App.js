import React from 'react';
import './App.css';
import FruitList from './components/FruitList';
import Button from './components/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
      newFruit: ''
    };
    this.onClickMore = this.onClickMore.bind(this);
  }

  onChangeValue = (event) => {
    const currentFruit = event.currentTarget.value;
    console.log(currentFruit);
    this.setState({
      newFruit: currentFruit
    })
  }

  onClickMore() {
    this.setState(prevState => {
      const moreFruits = [...prevState.popularFruits, prevState.newFruit];
      return {
        popularFruits: moreFruits,
        newFruit: '',
      }
    })
  }

  onClickDelete = (event) => {
    const toDeletFruit = event.currentTarget.getAttribute('data-fruit');
    this.setState(prevState => {
      const lessFruits = prevState.popularFruits.filter(fruit => fruit !== toDeletFruit);
      return {
        popularFruits: lessFruits,
      }
    })

  }

  render() {
    const { popularFruits, newFruit } = this.state;
    return (
      <div className="fruits--container">
       <FruitList popularFruits={popularFruits} onClickDelete={this.onClickDelete}/>
       <Button onChangeValue={this.onChangeValue} newFruit={newFruit} onClickMore={this.onClickMore}/>
      </div>
    );
  }
}

export default App;
