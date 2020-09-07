import React from 'react';
import './style.scss';
import { CommandItem } from '../CommandItem';

export const CommandsList = ({history}) => {
  return (
    <div className='commands'>
      <ul>
        {history.map(item => (
          <CommandItem command={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
