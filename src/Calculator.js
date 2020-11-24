import React from 'react';

class Calculator extends React.Component {

    constructor() {
        super()
        this.state = {
            num1: null,
            num2: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNumbers(this.state)
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.clearNumbers()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input name='num1' placeholder='first number' onChange={(e) => this.setState({num1: e.target.value})}></input>
                    <input name='num2' placeholder='second number' onChange={(e) => this.setState({num2: e.target.value})}></input>
                    <button type='submit' value='submit'>Submit</button>
                </form>
                <button type='submit' value='submit' onClick={this.handleClick}>Clear</button>
            </div>
        )
    }

}

export default Calculator;