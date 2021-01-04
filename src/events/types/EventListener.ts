import { IEventTypes } from '../interfaces/IEventTypes';
import { EventType } from './EventType';

export type EventListener<TEventType extends EventType> = (eventPayload: IEventTypes[TEventType]) => Promise<void>;
