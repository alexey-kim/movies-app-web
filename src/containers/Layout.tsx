import * as React from 'react';
import { Header } from '../components/Header';

export const Layout: React.FC = ({ children }) => {
  return <>
    <Header />
    {children}
  </>;
};
