import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        console.log('Counter constructor');
        super(props);
        this.state = {
            count: 0
        };
    }

    increase(){
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render(){
        console.log('Counter render');
        return(
            <div className="counter">
                <button onClick={() => this.decrease()}>-</button>
                <span> {this.state.count} </span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Counter did mount');
    }
    componentDidUpdate() {
        console.log('Counter did update');
    }
    componentWillUnmount() {
        console.log('Counter will unmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count === nextState.count) {
            return false;
        }
        return true;
    }
}
export default Count;