import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <h2 onClick={() => setState(!state)}>Is React running?</h2>
      <h2>What is state???: {state.toString()}</h2>
    </div>
  );
};

export default App;
