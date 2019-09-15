import React from 'react';

class SheepCounter extends React.Component {
    render() {
        const { counter, handleClickSheeps } = this.props;
        return (
            <React.Fragment>
                <div className="central-container">
                    <div className="counter-container">
                        {counter}
                    </div>
                    <button onClick={handleClickSheeps} className="button-container">Sheeps</button>
                </div>

            </React.Fragment>
        )
    }
}

export default SheepCounter;