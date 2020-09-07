import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { sendRequest } from '../../utils/api';

export const CmdForm = () => {
  const [command, setCommand] = useState('');

  const ref = useRef('');

  const submitCmd = (e) => {
    e.preventDefault();
    if (command === null || command === '' || command.trim() === '') return;
    console.log(command);

    setCommand('');
    sendRequest(
      'https://localhost:44341/api/commands',
      'POST',
      { bashCommand: command },
      'application/json'
    ).then((x) => console.log(x));
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className='cmd'>
      <form className='cmd__form' onSubmit={(e) => submitCmd(e)}>
        <div className='cmd__input-group'>
          <label htmlFor='commandInput' className='cmd__label'>
            Nikita command:
          </label>
          <input
            type='text'
            value={command}
            ref={ref}
            onChange={(e) => setCommand(e.target.value)}
            placeholder='Command'
            className='cmd__input'
          />
        </div>
      </form>
    </div>
  );
};
