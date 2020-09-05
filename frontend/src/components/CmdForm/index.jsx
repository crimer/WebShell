import React, {useState} from 'react';
import './style.scss';

export const CmdForm = () => {
  const [command, setCommand] = useState('');

  const ref = useRef('')

  const submitCmd = (e) => {
    e.preventDefault();
    if (command === null || command === '' || command.trim() === '') return
    console.log(command);

    setCommand('')
  }
  return (
    <div className='cmd'>
      <form className='cmd__form' onSubmit={(e)=>submitCmd(e)}>
        <div className='cmd__input-group'>
          <label htmlFor='commandInput' className='cmd__label'>
            Nikita CMD:
          </label>
          <input
            type='text'
            value={command}
            onChange={(e) => setCommand(e.target.value.trim())}
            placeholder='Command'
            className='cmd__input'
          />
        </div>
      </form>
    </div>
  );
};
