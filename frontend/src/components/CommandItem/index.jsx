import React from 'react';
import './style.scss';

export const CommandItem = ({ command }) => {
  const dateFormat = (date) => {
    return new Intl.DateTimeFormat().format(new Date(date)).toString();
  };

  return (
    <>
      <li className='cmd-item'>
        <div className="cmd-item__info">
          <span className='cmd-item__label'>
            {dateFormat(command.dateTime)} Nikita command:
          </span>
          <span className="cmd-item__command">{command.bashCommand}</span>
        </div>
        <p className='cmd-item__text'>{command.result}</p>
      </li>
    </>
  );
};
