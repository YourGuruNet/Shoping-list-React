import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
  render() {
    return (
      <div>
        to do list
        <ToDoItem />
      </div>
    );
  }
}
