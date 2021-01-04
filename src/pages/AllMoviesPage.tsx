import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import * as React from 'react';
import { MoviePageList } from '../components/MoviePageList';
import { Constants } from '../constants';
import { MaxWidthContainer } from '../containers/MaxWidthContainer';
import { useServiceContext } from '../contexts/hooks/useServiceContext';
import { IServices } from '../contexts/interfaces/IServices';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Movie } from '../models/Movie';
import { IndexedMovies } from '../types/IndexedMovies';

const AllMoviesPage: React.FC = () => {

  const [isLoading, setIsLoading] = React.useState<boolean>(() => false);
  const [latestPageIndex, setLatestPageIndex] = React.useState<number>(() => 1);
  const [indexedMovies, setIndexedMovies] = React.useState<IndexedMovies>(() => ({}));
  const [moreMoviesExist, setMoreMoviesExist] = React.useState<boolean>(() => false);
  const loadMoreMoviesRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const { eventService }: IServices = useServiceContext();

  // Set title in the main app header
  React.useEffect(() => {

    eventService.publishSyncEvent('headerLeftButtonAndTitleSetEvent', {
      leftButton: undefined,
      title: (
        <Typography
          component='h1'
          variant='h6'
          noWrap={true}>
          {/* TODO: Localise content */}
          Pop Movies
        </Typography>
      )
    });

    return () => {
      eventService.publishSyncEvent('headerLeftButtonAndTitleSetEvent', {
        leftButton: undefined,
        title: undefined
      });
    };
  }, [eventService]); // TODO: Add translator once localisation is implemented

  // Fetch movies for the latest page index
  React.useEffect(() => {
    (async function getMovies(): Promise<void> {
      if (!isLoading && !indexedMovies[latestPageIndex]) {
        setIsLoading(true);
        // TODO: Move hard-coded URL to config
        // TODO: Move API call to MovieService that implements IMovieService interface
        // TODO: Interact via IMovieService interface here
        // TODO: Allow user to specify orderBy and orderByDir
        const moviesResponse: AxiosResponse = await Axios.request({
          url: `http://localhost:3001/api/v1/movies?pageIndex=${latestPageIndex}&pageSize=${Constants.PAGE_SIZE}&orderBy=rating&orderByDir=desc`,
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

  // Lazy load movies for the next page when user scrolls to the bottom of the page
  useIntersectionObserver<HTMLDivElement>({
    ref: loadMoreMoviesRef,
    onIntersect: () => setLatestPageIndex((prevLatestPageIndex: number) => prevLatestPageIndex + 1),
    observeOnce: true
  });

  return (
    <MaxWidthContainer
      maxWidthBreakpoint='md'>
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
