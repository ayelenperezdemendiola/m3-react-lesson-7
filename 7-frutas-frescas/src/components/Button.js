import React from 'react';

class Button extends React.Component{
    render(){
        const {onChangeValue, newFruit, onClickMore} = this.props;
        return (
            <React.Fragment>
            <input type="text" id="add" onChange={onChangeValue} value={newFruit} />
            <button type="button" className="button--more" onClick={onClickMore}> Añadir <span role="img">🥝</span></button>
            </React.Fragment>
        )
    }
}

export default Button;