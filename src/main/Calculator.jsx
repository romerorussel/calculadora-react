import React, { Component } from 'react';
import './Calculator.css';
//Components
import Button from '../components/Button';
import Display from '../components/Display';

const initialDisplay = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    value: [0, 0],
    current: 0
}

export default class Calculator extends Component{
    state = { ...initialDisplay };

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        this.setState({ ...initialDisplay });
    }
    setOperation(operation){
        console.log(operation)
    }
    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

        const currentValue = clearDisplay ? '' : this.state.displayValue;

        const newDisplayValue = currentValue + n;

        this.setState({displayValue: newDisplayValue, clearDisplay: false});

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(newDisplayValue);
            const values = [...this.state.value];
            values[i] = newValue;
            this.setState(values);
        }
    }
    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/'click={this.setOperation} operation/>
                <Button label='7'click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.addDigit} />
                <Button label='=' click={this.setOperation} operation/>
            </div>
        );
    }
}