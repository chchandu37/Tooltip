import React from 'react';
import Tooltip from './Components/Tooltip';

const App = () => {
  return (
    <div className="app">
      <Tooltip position="top" text="Top Tooltip">
        <button>Hover me</button>
      </Tooltip>

      <Tooltip position="bottom" text="Bottom Tooltip">
        <button>Hover me</button>
      </Tooltip>

      <Tooltip position="right" text="Right Tooltip">
        <button>Hover me</button>
      </Tooltip>

      <Tooltip position="left" text="Left Tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
