import React, { Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css'


const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props;
        return <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: currentColor === RED
            })} />
            <div className={classNames('bulb', 'orange', {
                active: currentColor === ORANGE
            })} />
            <div className={classNames('bulb', 'green', {
                active: currentColor === GREEN
            })} />
        </div>;
    }
}

export default TrafficLight;

//App.js den giao thong
/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor(){
    super();
    this.state = {
        currentColor: GREEN
    };
    setInterval(() => {
      this.setState({
          currentColor: this.getNextColor(this.state.currentColor)
      });
  }, 1000);
}
getNextColor(color) {
  switch(color) {
      case RED:
          return ORANGE;
      case ORANGE:
          return GREEN;
      default:
          return RED;
  }

}
  render(){
    const { currentColor } = this.state;
      return (
      <div className="App">     
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}

export default App;*/
