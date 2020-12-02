import React, { Component } from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';

export default class ToDoItem extends Component {
  state = {
    productBayed: false,
  };
  productDoneColor = () => {
    this.setState((prevState) => ({ productBayed: !prevState.productBayed }));
  };

  render() {
    const { title, deleteItem, editItem } = this.props;
    const { productBayed } = this.state;
    return (
      <Li>
        <div
          className={`title ${productBayed ? 'colorRed' : ''}`}
          onClick={this.productDoneColor}>
          <span>
            <GiCheckMark />
          </span>
          <h6>{title}</h6>
        </div>

        <div className='icons'>
          <FaPencilAlt className='edit' onClick={editItem} />
          <AiFillDelete className='delete' onClick={deleteItem} />
        </div>
      </Li>
    );
  }
}

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;

  span {
    padding-right: 1rem;
  }
  .title {
    padding: 1rem;
    display: flex;
    cursor: pointer;
  }
  .icons {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  .delete:hover {
    color: red;
  }

  .edit:hover {
    color: var(--mainColor);
  }
  .colorRed {
    color: red;
  }
`;
