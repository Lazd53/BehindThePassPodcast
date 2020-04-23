import React from 'react';
import './App.scss';

import BtpHeader from './BtpHeader';
import PodcastDescription from './PodcastDescription';
import Episodes from './Episodes';
import BtpFooter from './BtpFooter';

function App() {
  return (
    <div className="App">
      <BtpHeader />
        <main>
          <PodcastDescription />
          <Episodes />
        </main>
      <BtpFooter/>
    </div>
  );
}

export default App;
