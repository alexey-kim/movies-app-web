import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { Loading } from '../components/primitives/Loading';

export interface ILazyContainerProps extends RouteComponentProps {
  readonly component: React.LazyExoticComponent<React.FC<RouteComponentProps>> | React.FC<RouteComponentProps>;
}

export const LazyContainer: React.FC<ILazyContainerProps> = (props: ILazyContainerProps) => {

  const { component: Component, path, default: defaultProp, location, navigate, uri } = props;
  const componentProps = { path, default: defaultProp, location, navigate, uri };

  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...componentProps} />
    </React.Suspense>
  );
};
