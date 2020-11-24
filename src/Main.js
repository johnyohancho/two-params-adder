import React from 'react';
import Calculator from './Calculator';
import RandomFact from './RandomFact';

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            magicalNumber: null
        }
    }


    addNumbers = (data) => {
        let sum = parseInt(data.num1) + parseInt(data.num2)
        this.setState({
            magicalNumber: sum
        })
    }

    clearNumbers = () => {
        this.setState({
            magicalNumber: null
        })
    }

    render() {
        return(
            <div>
                <h1>Two Params "Adder"</h1>
                <Calculator addNumbers={this.addNumbers} clearNumbers={this.clearNumbers}/>
                <RandomFact magicalNumber={this.state.magicalNumber}/>
            </div>
        )
    }
}

export default Main;