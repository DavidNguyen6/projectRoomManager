import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.question!=='')
                {
                    var ans='';
                    try
                    {
                        ans = eval(this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans===undefined)
                        this.setState({answer: "Math Error"});
                    else
                        this.setState({ answer: ans , question: this.state.question});
                    break;
                }
            }
            case 'Clear': {
                this.setState({ question: '', answer: '' });
                break;
            }

            case 'Delete': {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question: str});
                break;
            }

            default: {
                this.setState({ question: this.state.question += value})
                break;
            }
        }
    }

    render()
    {
        return (
            <div className="frame">
                <CalculatorTitle title="Máy tính"/>
                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer}/>
                    <div className="button-row">
                        <Button className="btnaction" label={'Clear'} handleClick = {this.handleClick}/>
                        <Button className="btnaction" label={'Delete'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'/'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'8'} handleClick={this.handleClick}/>
                        <Button label={'9'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'+'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'6'} handleClick={this.handleClick}/>
                        <Button label={'7'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'*'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick={this.handleClick}/>
                        <Button label={'5'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'-'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'2'} handleClick={this.handleClick}/>
                        <Button label={'3'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'.'} handleClick={this.handleClick}/>
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick={this.handleClick}/>
                        <Button label={'1'} handleClick={this.handleClick}/>
                        <Button className="btnaction" label={'='} handleClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
