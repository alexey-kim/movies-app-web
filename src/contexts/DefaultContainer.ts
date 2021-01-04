import { Container } from 'inversify';
import { Constants } from '../constants';
import { EventService } from '../events/EventService';
import { IEventService } from '../events/interfaces/IEventService';

export const DefaultContainer: Container = new Container();
DefaultContainer.bind<IEventService>(Constants.DI.EVENT_SERVICE).to(EventService).inSingletonScope();
