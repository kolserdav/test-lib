import React from 'react';
import './App.css';

// Import styles of component if required
import '@kolserdav/react-lib/src/dist/Main.css';

// Import your package as library, need change @kolserdav/react-lib no custom package name
const Component = React.lazy(() => import('@kolserdav/react-lib'));

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
