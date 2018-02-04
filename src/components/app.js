import React, { Component } from 'react';
import TodoInput from "./TodoInput";
import TodoDisplay from './TodoDisplay';


export default class App extends Component {
  render() {
    return (
      <div>
          <h3> MY TO-DO APP WITH REDUX </h3>
      <TodoInput/>

    <hr/>
    <TodoDisplay/>
        </div>


    );
  }
}
