import React from 'react';
import { WordOmitter } from './WordOmitter';

const App = () => {
  // Words to be omitted
  const wordsToOmit = ['a', 'an', 'the'];

  return (
    <div>
      <WordOmitter omitWords={wordsToOmit} />
    </div>
  );
};

export default App;
