import * as React from 'react';
import { Layout } from './Layout';
import { Routes } from './Routes';
import { ThemeProvider } from './ThemeProvider';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};
