import * as React from 'react';
import { DefaultContainer } from '../contexts/DefaultContainer';
import { Layout } from './Layout';
import { Routes } from './Routes';
import { ServiceProvider } from './ServiceProvider';
import { ThemeProvider } from './ThemeProvider';

export const App: React.FC = () => {
  return (
    <ServiceProvider container={DefaultContainer}>
      <ThemeProvider>
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </ServiceProvider>
  );
};
