import React, { useState } from 'react';
// Some child component of module
import Header from './ui/Header';
import { REPOSITORY } from './utils';

/**
 * Main component of library
 */

interface MainProps {
  test?: boolean;
}

function Main({ test }: MainProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Header
      onClick={() => {
        setShow(!show);
      }}
    >
      React Library Component. Show: {show ? <a href={REPOSITORY}>{REPOSITORY}</a> : ''}
    </Header>
  );
}

Main.defaultProps = {
  test: false,
};

export default Main;
