import { Container } from 'inversify';
import * as React from 'react';
import { IServices } from '../contexts/interfaces/IServices';
import { ServiceContext } from '../contexts/ServiceContext';
import { getServices } from '../contexts/utils/contextUtils';

export interface IServiceProviderProps {
  readonly container: Container;
}

export const ServiceProvider: React.FC<IServiceProviderProps> = ({ container, children }) => {

  const [services] = React.useState<IServices>(() => getServices(container));

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};
