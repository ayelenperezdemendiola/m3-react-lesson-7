import React from 'react';

class FruitList extends React.Component{
    render(){
        const {popularFruits, onClickDelete} = this.props;
        return (
            <ul className="fruits--list">
            {popularFruits.map(fruit =>
              <div className="fruit--container" key={`c${fruit}`}>
                <li className="fruit" key={`f${fruit}`}> {fruit}</li>
                <button className="delete--fruit" data-fruit={fruit} onClick={onClickDelete} key={`b${fruit}`}>Eliminar</button>
              </div>
            )}
          </ul>
        )
    }
}

export default FruitList;