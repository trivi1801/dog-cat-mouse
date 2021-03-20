/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading">
            This is Text
         </Accordion>
      </div>
    );
  }
}
export default App;*/

/*const { Component } = require("react");*/



/*import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './components/img/check.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
        newItem:'',
        todoItems: [
          { title:'Mua bim bim', isComplete: true },
          { title:'Đi đá bóng', isComplete: true },
          { title:'Đi đổ xăng', isComplete: false }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !(isComplete)
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }
  onKeyUp(event) {
    if (event.keyCode === 13){

      
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {return;}
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems

        ]
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }
  render(){
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header" >
            <img src ={tick} width={32} height={32} />
            <input 
              type="text"  
              placeholder="Add a new item" 
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}/>
          </div>
        { todoItems.length && todoItems.map((item, index) =>
          <TodoItem 
          key={index} 
          item={item} 
          onClick={this.onItemClicked(item)} />
          )
        }  
        </div>
      )
    } else {
      return (
        <div className="App">Nothing here.</div>
      )
    }
  } 
} 
export default App;*/


/*import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    
  }
  componentDidMount(){
    this.inputElement.current.focus()
  }
  render(){
    return (
      <div className="App">
          <input type="text" ref={this.inputElement}/>
      </div>
    );
  }
}
export default App;*/

/*import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Count from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    };
  }
  componentDidUpdate(){
    console.log('App updated');
  }
  removeCounter() {
    this.setState({
      showCounter: false
    });
  }
  render(){
    console.log('App render');
    return(
      <div className="App">
        <button onClick={() => this.removeCounter}>Remove counter</button>
        <Counter/>
      </div>
    );
  }
}
export default App;*/


import React, { Component } from 'react';
import WeeklySongListItem from './storybook/abc/WeeklySongListItem';
class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
          order="01"
          title="Em Không Thể"
          singer="Tiên Tiên, Touliver"
          viewCount={3000}/>
    </div>;
  }
}
export default App;