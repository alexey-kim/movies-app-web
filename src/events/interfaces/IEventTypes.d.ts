import * as React from 'react';

export interface IEventTypes {
  readonly headerLeftButtonAndTitleSetEvent: {
    readonly leftButton: React.ReactNode;
    readonly title: React.ReactNode;
  };
}
