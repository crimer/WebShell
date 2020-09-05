import React from 'react';
import './style.scss';
import { CommandItem } from '../CommandItem';

export const CommandsList = () => {
  return (
    <div className='commands'>
      <ul>
        {[1, 2, 3].map((item, i) => (
          <CommandItem
            command='cmd'
            text='Microsoft Windows [Version 10.0.18363.1016] (c) Корпорация Майкрософт
          (Microsoft Corporation), 2019. Все права защищены.'
            key={i}
          />
        ))}
      </ul>
    </div>
  );
};
