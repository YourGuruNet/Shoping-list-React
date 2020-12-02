import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';

export default class ToDoList extends Component {
  render() {
    const { items, clearList, deleteItem, editItem } = this.props;
    return (
      <Ul>
        {items.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              deleteItem={() => deleteItem(item.id)}
              editItem={() => editItem(item.id)}></ToDoItem>
          );
        })}
        <button className='button' type='button' onClick={clearList}>
          Clear list
        </button>
      </Ul>
    );
  }
}

const Ul = styled.ul`
  width: 90%;
  display: inline-block;
  margin: 2rem;
  font-size: 2rem;
  color: var(--mainColor-light2);
  border-top: solid 0.01rem var(--mainColor-light);

  .button {
    text-transform: uppercase;
    margin: 1rem 0;
    float: right;
    font-size: 1.5rem;
    padding: 0.8rem 1rem;
    background-color: var(--mainColor);
    border: solid 0.1rem var(--mainColor-light);
    color: var(--mainColor-light2);
    :hover {
      background-color: var(--mainColor-light);
      border: solid 0.1rem var(--mainColor-light);
      color: var(--mainColor);
      box-shadow: 0 0 4rem 0.5rem var(--mainColor-light2);
    }
    :focus {
      box-shadow: 0 0 4rem 0.5rem var(--mainColor-light2);
      outline: none;
    }
  }
`;
