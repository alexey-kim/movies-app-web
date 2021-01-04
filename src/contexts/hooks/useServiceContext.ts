import * as React from 'react';
import { IServices } from '../interfaces/IServices';
import { ServiceContext } from '../ServiceContext';

export function useServiceContext(): IServices {
  const services: IServices = React.useContext(ServiceContext);
  return services;
}
