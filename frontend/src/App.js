import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
App = connect()(App);

// メッセージコンポーネント
class Message extends Component {
  style = {
    fontSize: '20pt',
    padding: '20px 5px'
  };

  render(){
    return(
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

Message = connect((state)=>state)(Message);

// ボタンコンポーネント
class Button extends Component{
  style = {
    fontSize: '16pt',
    padding: '5px 10px'
  };

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    if (e.shiftKey) {
      this.props.dispatch({type: 'DECREMENT'});
    } else if (e.ctrlKey) {
      this.props.dispatch({type: 'RESET'});
    } else {
      this.props.dispatch({type: 'INCREMENT'});
    }
  }

  render(){
    return(
      <button style={this.style} onClick={this.doAction}>
        Click
      </button>
    );
  }
}
Button = connect()(Button);
export default App;
