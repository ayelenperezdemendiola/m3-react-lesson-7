import React from 'react';
import './App.css';
// Mostrando info relacionada
// Vamos a partir de una web sencilla con un input de tipo texto y un párrafo vacío. ¿Seremos capaces de hacer que con React y el estado, cuando modificamos el input aparezca el texto en el párrafo?

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      inputCo:'',
      paragraphCo: ''
    };
    this.writeInput = this.writeInput.bind (this);
  }
  writeInput(event){
    const inputValue = event.currentTarget.value;
    this.setState({
      paragraphCo: inputValue
    });
  }
  render() {
    return (
      <React.Fragment>
        <input onChange = {this.writeInput}type="text" />
        <p>{this.state.paragraphCo}</p>
      </React.Fragment>
    )
  }
}

export default App;

