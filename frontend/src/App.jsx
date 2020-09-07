import React, { useEffect, useState } from 'react';
import './App.scss';
import { CommandsList } from './components/CommandsList';
import { CmdForm } from './components/CmdForm';

const App = () => {
  const [history, setHistory] = useState({ error: '', allHistory: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCommands = async () => {
      try {
        setIsLoading(true);
        const result = await fetch('https://localhost:44341/api/commands');
        const data = await result.json();
        setHistory({ ...history, allHistory: data });
      } catch (error) {
        setHistory({ error, allHistory: [] });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCommands();
  }, []);

  return (
    <div className='container'>
      <header className='header'>Web Shell - Shevchenko Nikita</header>
      <div className='page'>
        {isLoading && <p>Loading ...</p>}
        {history.error && <p>Error: {history.error}</p>}
        {history.allHistory.length > 0 ? (
          <CommandsList history={history.allHistory} />
        ) : (
          <p>История комманд чиста</p>
        )}

        <CmdForm />
      </div>
    </div>
  );
};

export default App;
