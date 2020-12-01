import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { v1 as uuid } from 'uuid';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
class App extends Component {
  state = {
    items: [
      { id: 1, title: 'banana' },
      { id: 2, title: 'apple' },
      { id: 3, title: 'cheese' },
    ],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {};
  handleSubmit = (e) => {};
  clearList = () => {};
  deleteItem = () => {};
  editItem = () => {};
  render() {
    console.log(this.state);
    return (
      <Section>
        <h1>Shopping list</h1>
        <ToDoInput
          item={this.state.item} // on item
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.editItem}
        />
        <ToDoList
          items={this.state.items} //list
          clearList={this.clearList}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </Section>
    );
  }
}

export default App;
const Section = styled.section`
  margin: 2rem auto;
  width: 50rem;
  height: 50rem;
  background-color: var(--mainColor-dark);

  h1 {
    font-size: 5rem;
    text-align: center;
    padding: 2rem;
    color: var(--mainColor-light2);
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;
