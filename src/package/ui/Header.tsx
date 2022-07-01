/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import s from './Header.module.scss';

interface HeaderProps {
  children: (string | JSX.Element) | (string | JSX.Element)[];
  onClick: () => void;
}

function Header({ children, onClick }: HeaderProps) {
  return (
    <h1 role="button" onClick={onClick} className={s.purple}>
      {children}
    </h1>
  );
}

export default Header;
