import React from 'react';
import './style.scss';

export const CommandItem = ({ command }) => {
  const dateFormat = (date) => {
    return new Intl.DateTimeFormat().format(new Date(date)).toString();
  };
  return (
    <>
      <li className='cmd-item'>
        <span className='cmd-item__label'>
          {dateFormat(command.dateTime)} Nikita command: {command.bashCommand}
        </span>
        <p className='cmd-item__text'>{command.result}</p>
      </li>
    </>
  );
};
