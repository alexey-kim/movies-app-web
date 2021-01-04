import * as React from 'react';
import { IServices } from './interfaces/IServices';

// Do not have a default value, i.e. ServiceContext must be used explicitly
export const ServiceContext = React.createContext<IServices>(undefined as any);
