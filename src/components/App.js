import React from 'react';
import './App.scss';

import BtpHeader from './BtpHeader';
import BtpMain from './BtpMain';
import Episodes from './Episodes';

function App() {
  return (
    <div className="App">
      <BtpHeader />
      <BtpMain />
      <Episodes />
    </div>
  );
}

export default App;
