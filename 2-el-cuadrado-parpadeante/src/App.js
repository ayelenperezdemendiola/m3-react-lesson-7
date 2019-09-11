import React from 'react';
import './App.css';

// EJERCICIO 2
// El cuadrado parpadeante
// Vamos a crear una página con una cuadrado de tamaño fijo (por ejemplo un div) con un color de fondo azul. Vamos a hacer que al hacer clic sobre el cuadrado, su color de fondo cambie a rojo. Si volvemos a hacer clic, pasa de nuevo a azul, y así sucesivamente. Vamos a implementar este cuadrado parpadeante usando el estado del componente (podemos almacenar el color o un booleano).
// PISTA: Al escuchar el evento de clic para comprobar de qué color estaba anteriormente el cuadrado, usaremos la versión de setState que toma como parámetro el prevState

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    }
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.setState((prevState) => {
      let nextColor;
      if (prevState.color === 'blue') {
        nextColor = 'tomato';
      } else {
        nextColor = 'blue';
      }
      return {
        color: nextColor
      };
    });
  }

  render() {
    return (
      <div className="centralCo">
      <div className={`container container-${this.state.color}`} onClick={this.handleColor}></div>
      </div>
    )
  }
}

export default App;
