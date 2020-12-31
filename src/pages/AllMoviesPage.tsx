import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import * as React from 'react';
import { MoviePageList } from '../components/MoviePageList';
import { Constants } from '../constants';
import { MaxWidthContainer } from '../containers/MaxWidthContainer';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Movie } from '../models/Movie';
import { IndexedMovies } from '../types/IndexedMovies';

const AllMoviesPage: React.FC = () => {

  const [isLoading, setIsLoading] = React.useState<boolean>(() => false);
  const [latestPageIndex, setLatestPageIndex] = React.useState<number>(() => 1);
  const [indexedMovies, setIndexedMovies] = React.useState<IndexedMovies>(() => ({}));
  const [moreMoviesExist, setMoreMoviesExist] = React.useState<boolean>(() => false);
  const loadMoreMoviesRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const classes = useStyles();

  React.useEffect(() => {
    (async function getMovies(): Promise<void> {
      if (!isLoading && !indexedMovies[latestPageIndex]) {
        setIsLoading(true);
        const moviesResponse: AxiosResponse = await Axios.request({
          url: `http://localhost:3001/api/v1/movies?pageIndex=${latestPageIndex}&pageSize=${Constants.PAGE_SIZE}`,
          method: 'GET'
        });
        if (Array.isArray(moviesResponse.data?.items)) {
          const movies: Movie[] = plainToClass(Movie, moviesResponse.data.items, { strategy: 'excludeAll', excludeExtraneousValues: true });
          setIndexedMovies((prevIndexedMovies: IndexedMovies) => ({ ...prevIndexedMovies, [latestPageIndex]: movies }));
          setMoreMoviesExist(movies.length === Constants.PAGE_SIZE);
        }
        setIsLoading(false);
      }
    })();
  }, [isLoading, latestPageIndex, indexedMovies]);

  useIntersectionObserver<HTMLDivElement>({
    ref: loadMoreMoviesRef,
    onIntersect: () => setLatestPageIndex((prevLatestPageIndex: number) => prevLatestPageIndex + 1),
    observeOnce: true
  });

  return (
    <MaxWidthContainer
      maxWidthBreakpoint='md'
      contentClassName={classes.mainContent}>
      <Grid
        container={true}
        spacing={0}>
        {[...Array(latestPageIndex)].map((_, pageIndex: number) => (
          <MoviePageList
            key={pageIndex + 1}
            pageIndex={pageIndex + 1}
            movies={indexedMovies[pageIndex + 1] ?? []}
          />
        ))}
      </Grid>
      {!isLoading && moreMoviesExist && <div ref={loadMoreMoviesRef} />}
    </MaxWidthContainer>
  );
};

export default AllMoviesPage;

const useStyles = makeStyles(() => createStyles({
  mainContent: {
    padding: 0
  }
}));
