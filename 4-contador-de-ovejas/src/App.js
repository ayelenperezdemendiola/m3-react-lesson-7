import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClickSheeps=()=>{
    let moreSheeps = this.state.counter +1
    this.setState({
      counter: moreSheeps
    })



  }
  render() {
    return (
      <div className="central-container">
        <div className="counter-container">
          {this.state.counter}
        </div>
        <button onClick={this.handleClickSheeps}className="button-container">Sheeps</button>
      </div>
    )
  }
}

// EJERCICIO 4
// Contador de ovejas
// Definitivamente, Time2Sleep es fan de Adalab. Esta vez, basándose en unos novedosos estudios científicos de alguna famosísima universidad que dice que al contar ovejas nos aburrimos tanto que caemos dormidos, nos han encargado que hagamos un contador de ovejas digital.
// Crearemos un componente cuentaovejas (SheepCounter) que mostrará un número en grande y un botón. El botón tendrá asignado un escuchador al evento click que aumentará el contador. Actualizaremos el valor del contador con setState(/* función */).

export default App;
