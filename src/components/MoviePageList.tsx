import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { Movie } from '../models/Movie';
import { MovieView } from './MovieView';

export interface IMoviePageListProps {
  readonly pageIndex: number;
  readonly movies: Movie[];
}

export const MoviePageList: React.FC<IMoviePageListProps> = (props: IMoviePageListProps) => {

  const { pageIndex, movies } = props;

  return movies.length
    ? <>
      {movies.map((movie: Movie, movieIndex: number) => (
        <Grid
          key={`${pageIndex}-${movieIndex}`}
          item={true}
          xs={6} sm={4} md={3}>
          <MovieView
            pageIndex={pageIndex}
            movieIndex={movieIndex + 1}
            movie={movie}
          />
        </Grid>
      ))}
    </>
    : null;
};
