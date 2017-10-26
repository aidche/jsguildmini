import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleD = this.handleD.bind(this);
        this.handleChange = this.handleChangec.bind(this);
    }
    handleIncrement () {
        this.setState({
            value: this.state.value + 1
        });
    }
    handleD () {

        if(this.state.value < 1){
            return
        }
        this.setState({
            value: this.state.value - 1
        });
    }
    handleChange (event) {
        if(event.target.innerHTML === '+'){
            this.setState({
                value: this.state.value + 1
            });
        }else{
            if(this.state.value === 0){
                return;
            }
            this.setState({
                value: this.state.value - 1
            });
        }
    }
    render () {
        return (
            <div className="counter">
                {this.props.title}
                {": "}
                <span className="counter-value">{this.state.value}</span>
                <button onClick={this.handleChange}>+</button>
                <button onClick={this.handleChange}>-</button>
            </div>
        );
    }
}



ReactDOM.render(
    <Counter title="abc"/>,
    document.getElementById('root')
);