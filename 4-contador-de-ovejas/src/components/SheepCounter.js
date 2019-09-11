import React from 'react';

class SheepCounter extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="counter-container">
            {this.props.counter}
          </div>
          <button onClick={this.props.handleClickSheeps}className="button-container">Sheeps</button>
          </React.Fragment>
        )
    }
}

export default SheepCounter;