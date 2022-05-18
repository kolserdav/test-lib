import React from 'react';
import './App.css';

// Import package as library
const Component = React.lazy(() => import('test-c1'));

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
