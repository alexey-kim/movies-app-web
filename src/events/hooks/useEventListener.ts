import * as React from 'react';
import { useServiceContext } from '../../contexts/hooks/useServiceContext';
import { IServices } from '../../contexts/interfaces/IServices';
import { EventListener } from '../types/EventListener';
import { EventType } from '../types/EventType';

export function useEventListener<TEventType extends EventType>(eventType: TEventType, eventListener: EventListener<TEventType>): void {

  const { eventService }: IServices = useServiceContext();

  React.useEffect(() => {
    eventService.addEventListener(eventType, eventListener);
    return () => eventService.removeEventListener(eventType, eventListener);
  }, [eventService, eventType, eventListener]);
}
