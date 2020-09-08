import React, { useEffect, useState } from 'react';
import './App.scss';
import { CommandsList } from './components/CommandsList';
import { CmdForm } from './components/CmdForm';
import { sendRequest } from './utils/api';
import { Loader } from './components/Loader';

const App = () => {
  const [history, setHistory] = useState({ error: '', allHistory: [] });
  const [commands, setCommands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Подгрузка истории комманд
  useEffect(() => {
    const fetchCommands = async () => {
      try {
        setIsLoading(true);
        const result = await sendRequest('api/commands', 'GET');
        if (!result.isFailed)
          setHistory({ ...history, allHistory: result.data });
        else {
          setHistory({ error: result.error, allHistory: [] });
        }
      } catch (error) {
        setHistory({ error: error, ...history });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCommands();
  }, []);

  // Сбор только комманд после каждого изменения истории
  useEffect(() => {
    let mass = history.allHistory.map((item) => item.bashCommand);
    setCommands(mass);
  }, [history]);

  const addCommand = (command) => {
    setHistory({ ...history, allHistory: [...history.allHistory, command] });
  };
  return (
    <div className='container'>
      <header className='header'>Web Shell - Shevchenko Nikita</header>
      <div className='page'>
        {history.error && <p>Error: {history.error}</p>}
        {isLoading && <Loader />}
        {history.allHistory.length > 0 ? (
          <CommandsList history={history.allHistory} />
        ) : (
          <p>История комманд чиста</p>
        )}

        <CmdForm commands={commands} addCommand={addCommand} />
      </div>
    </div>
  );
};

export default App;
