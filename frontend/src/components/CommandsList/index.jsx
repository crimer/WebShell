import React, { useEffect, useRef } from 'react';
import './style.scss';
import { CommandItem } from '../CommandItem';

export const CommandsList = (prop) => {
  const historyList = useRef(null);

  useEffect(() => {
    historyList.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [prop]);

  return (
    <div className='commands'>
      <ul ref={historyList} id="ul">
        {prop.history.map((item) => (
          <CommandItem command={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
