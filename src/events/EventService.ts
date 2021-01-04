import { injectable } from 'inversify';
import { IEventService } from './interfaces/IEventService';
import { IEventTypes } from './interfaces/IEventTypes';
import { EventListener } from './types/EventListener';
import { EventType } from './types/EventType';

@injectable()
export class EventService implements IEventService {

  private readonly _eventListeners: Map<EventType, Set<EventListener<EventType>>> = new Map<EventType, Set<EventListener<EventType>>>();

  public addEventListener<TEventType extends EventType>(eventType: TEventType, eventListener: EventListener<TEventType>): void {
    const eventListeners: Set<EventListener<TEventType>> = this._getEventListeners(eventType);
    if (!eventListeners.has(eventListener)) {
      eventListeners.add(eventListener);
      this._eventListeners.set(eventType, eventListeners as any);
    }
  }

  public removeEventListener<TEventType extends EventType>(eventType: TEventType, eventListener: EventListener<TEventType>): void {
    const eventListeners: Set<EventListener<TEventType>> = this._getEventListeners(eventType);
    if (eventListeners.has(eventListener)) {
      eventListeners.delete(eventListener);
      if (eventListeners.size) {
        this._eventListeners.set(eventType, eventListeners as any);
      } else {
        this._eventListeners.delete(eventType);
      }
    }
  }

  public async publishAsyncEvent<TEventType extends EventType>(eventType: TEventType, eventPayload: IEventTypes[TEventType]): Promise<void> {
    const eventListeners: Set<EventListener<TEventType>> = this._getEventListeners(eventType);
    if (eventListeners.size) {
      setTimeout(() => {
        // Execute all asynchronous event listeners without awaiting
        // forEach loop won't wait for asynchronous functions to complete
        eventListeners.forEach(async (eventListener: EventListener<TEventType>) => {
          try {
            await eventListener(eventPayload);
          } catch (error) {
            console.error(error); // tslint:disable-line: ban no-console
          }
        });
      }, 0);
    }
  }

  public async publishSyncEvent<TEventType extends EventType>(eventType: TEventType, eventPayload: IEventTypes[TEventType]): Promise<void> {
    const eventListeners: Set<EventListener<TEventType>> = this._getEventListeners(eventType);
    if (eventListeners.size) {
      // Execute and await all asynchronous event listeners in the order of registration
      // for..of loop will wait for asynchronous functions to complete
      for (const eventListener of eventListeners) {
        try {
          await eventListener(eventPayload);
        } catch (error) {
          console.error(error); // tslint:disable-line: ban no-console
        }
      }
    }
  }

  private _getEventListeners<TEventType extends EventType>(eventType: TEventType): Set<EventListener<TEventType>> {
    return this._eventListeners.get(eventType) ?? new Set<EventListener<TEventType>>();
  }
}
