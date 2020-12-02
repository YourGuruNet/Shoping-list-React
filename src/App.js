import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { v1 as uuid } from 'uuid';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    edit: false,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }; //previous values + new values
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      edit: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  deleteItem = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: sortedItems,
    });
  };
  editItem = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: sortedItems,
      item: selectedItem.title,
      id: id,
      edit: true,
    });
  };
  render() {
    // console.log(this.state);
    return (
      <Section>
        <h1>Shopping list</h1>
        <ToDoInput
          item={this.state.item} // on item
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          edit={this.state.edit}
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
  max-width: 50rem;
  min-height: 50rem;
  background-color: var(--mainColor-dark);

  h1 {
    font-size: 5rem;
    text-align: center;
    padding: 2rem;
    color: var(--mainColor-light2);
    font-family: 'Nerko One', cursive;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
