import React from 'react';
import Header from './ui/Header';

/**
 * Main component of library
 */

interface MainProps {
  test?: boolean;
}

function Main({ test }: MainProps) {
  return <Header>Library Component</Header>;
}

Main.defaultProps = {
  test: false,
};

export default Main;
