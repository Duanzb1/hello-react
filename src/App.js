import React, { Component } from 'react';
import logo from './logo.svg';
import CommonInput from './components/commonInput'
import CommonList from './components/commonList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      commonDataList: []
    }
  }
  inputCallback({username,common}) {
    this.state.commonDataList.push({ username, common })
    this.setState({
      commonDataList: this.state.commonDataList
    })
  }
  render() {
    return (
      <div className="App">
        <CommonInput inputCallback={this.inputCallback.bind(this)}/>
        <CommonList commonDataList={this.state.commonDataList}/>
      </div>
    );
  }
}

export default App;
