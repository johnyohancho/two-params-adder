import React from 'react';

class RandomFact extends React.Component {


    render() {
        return (
            <div>
                <h1>{this.props.magicalNumber}</h1>
            </div>
        )
    }

}

export default RandomFact;