import React from 'react';
import s from './Header.module.scss';

interface HeaderProps {
  children: string;
}

function Header({ children }: HeaderProps) {
  return <h1 className={s.purple}>{children}</h1>;
}

export default Header;
