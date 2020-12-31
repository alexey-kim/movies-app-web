import * as React from 'react';
import { Movie } from '../models/Movie';
import { css } from '../utils/stylingUtils';
import { Image } from './primitives/Image';

export interface IMovieViewProps {
  readonly pageIndex: number;
  readonly movieIndex: number;
  readonly movie: Movie;
}

export const MovieView: React.FC<IMovieViewProps> = (props: IMovieViewProps) => {

  const { pageIndex, movieIndex, movie } = props;

  return (
    <div className={css(`page-${pageIndex} movie-${movieIndex}`)}>
      <Image
        altText={movie.title}
        pictureUrls={movie.pictureUrls}
        aspectRatio={3 / 2}
      />
    </div>
  );
};
