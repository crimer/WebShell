import React from 'react';
import './style.scss';

export const CommandItem = ({command, text}) => {
  return (
    <>
      <li className='cmd-item'>
        <span className='cmd-item__label'>Nikita CMD: {command}</span>
        <p className="cmd-item__text">
          {text}
        </p>
      </li>
    </>
  );
};
