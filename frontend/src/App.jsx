import React from 'react';
import './App.scss';
import { CommandsList } from './components/CommandsList';
import { CmdForm } from './components/CmdForm';

const App = () => {
  return (
    <div className='container'>
      <header className='header'>Web Shell - Shevchenko Nikita</header>
      <div className="page">
        <CommandsList />
        <CmdForm />
      </div>
    </div>
  );
};

export default App;
