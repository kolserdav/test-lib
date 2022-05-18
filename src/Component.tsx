import React from 'react';

interface ComponentProps {
  test?: boolean;
}

function Component({ test }: ComponentProps) {
  return <div className="App">Component</div>;
}

export default Component;
