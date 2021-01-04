import { Container } from 'inversify';
import { Constants } from '../../constants';
import { IServices } from '../interfaces/IServices';

export function getServices(container: Container): IServices {
  return {
    eventService: container.get(Constants.DI.EVENT_SERVICE)
  };
}
