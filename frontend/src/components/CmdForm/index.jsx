import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { sendRequest } from '../../utils/api';

export const CmdForm = ({ commands, addCommand }) => {
  const [command, setCommand] = useState('');
  const [index, setIndex] = useState(commands.length);
  const ref = useRef('');

  // Переключение между историей команд через стрелочки
  const changeCommand = (e) => {
    // up
    if (e.keyCode === 38) {
      if (index === 0) setIndex(commands.length - 1);
      else setIndex(index - 1);
    }
    // down
    if (e.keyCode === 40) {
      if (index === commands.length) setIndex(0);
      else setIndex(index + 1);
    }
  };

  useEffect(() => {
    setCommand(commands[index]);
  }, [index]);

  // Отправка команды
  const submitCmd = (e) => {
    e.preventDefault();
    if (command === null || command === '' || command.trim() === '') return;
    console.log(command);

    sendRequest('api/commands', 'POST', { bashCommand: command }, 'application/json')
      .then((res) => addCommand(res.data));

    setCommand('');
  };

  // Авто фокус input
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
            onKeyDown={(e) => changeCommand(e)}
            onChange={(e) => setCommand(e.target.value)}
            placeholder='Command'
            className='cmd__input'
          />
        </div>
      </form>
    </div>
  );
};
