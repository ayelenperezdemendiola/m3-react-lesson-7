import React from 'react';

class SheepPicture extends React.Component {
    render() {
        const { sheep } = this.props;
        return (
            <div className="sheeps-container">
                {sheep.map(sheepy => {
                    return <img className="sheep" alt="sheep" src={sheepy.sheep} />
                })}
            </div>
        )
    }
}

export default SheepPicture;