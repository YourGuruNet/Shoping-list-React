import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import styled from 'styled-components';

export default class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, edit } = this.props;
    return (
      <Section>
        <form onSubmit={handleSubmit}>
          <input
            value={item}
            onChange={handleChange}
            className='input'
            type='text'
            placeholder='Insert product..'
          />
          <button
            disabled={item ? false : true}
            className={edit ? 'button editButton' : 'button'}
            type='submit'>
            {edit ? 'Edit item' : 'Add'}{' '}
            {edit ? <MdModeEdit /> : <MdAddShoppingCart />}
          </button>
        </form>
      </Section>
    );
  }
}

const Section = styled.div`
  width: 90%;
  margin: 0 auto;

  .input {
    display: block;
    margin: 0 auto;
    width: 92%;
    padding: 1rem;
    background-color: var(--mainColor);
    color: var(--mainColor-light2);
    border: solid 0.1rem var(--mainColor-light);
    :focus {
      box-shadow: 0.5rem 0.5rem 1rem var(--mainColor-light2);
      outline: none;
    }
    ::placeholder {
      color: var(--mainColor-light);
    }
  }
  .button {
    text-transform: uppercase;
    margin: 1rem 0;
    float: right;
    font-size: 1.8rem;
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
  .editButton {
    background-color: var(--mainColor-light);
    border: solid 0.1rem var(--mainColor-light);
    color: var(--mainColor);
    :hover {
      background-color: var(--mainColor);
      border: solid 0.1rem var(--mainColor-light);
      color: var(--mainColor-light2);
    }
  }
`;
