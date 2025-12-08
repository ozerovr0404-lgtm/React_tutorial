import './Button.css';
import {useState} from 'react';

function Button({ text, onCLick }) {

  return (
      <button className='button-accent' onCLick={onCLick}>{text}</button>
  );
}

export default Button