import { EventListener } from '../types/EventListener';
import { EventType } from '../types/EventType';
import { IEventTypes } from './IEventTypes';

export interface IEventService {
  addEventListener<TEventType extends EventType>(eventType: TEventType, eventListener: EventListener<TEventType>): void;
  removeEventListener<TEventType extends EventType>(eventType: TEventType, eventListener: EventListener<TEventType>): void;
  publishAsyncEvent<TEventType extends EventType>(eventType: TEventType, eventPayload: IEventTypes[TEventType]): Promise<void>;
  publishSyncEvent<TEventType extends EventType>(eventType: TEventType, eventPayload: IEventTypes[TEventType]): Promise<void>;
}
