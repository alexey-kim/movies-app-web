import { Link } from '@reach/router';
import * as React from 'react';
import { Constants } from '../constants';
import { Movie } from '../models/Movie';
import { getMovieDetailPageUrl } from '../utils/urlUtils';
import { Image } from './primitives/Image';

export interface IMovieViewProps {
  readonly movie: Movie;
}

export const MovieView: React.FC<IMovieViewProps> = (props: IMovieViewProps) => {

  const { movie } = props;

  return (
    <Link to={getMovieDetailPageUrl(movie.code)}>
      <Image
        altText={movie.title}
        pictureUrls={movie.pictureUrls}
        aspectRatio={Constants.IMAGE_ASPECT_RATIO}
      />
    </Link>
  );
};
