import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Link } from '@reach/router';
import Axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import * as React from 'react';
import { Image } from '../components/primitives/Image';
import { Constants } from '../constants';
import { MaxWidthContainer } from '../containers/MaxWidthContainer';
import { useServiceContext } from '../contexts/hooks/useServiceContext';
import { IServices } from '../contexts/interfaces/IServices';
import { MovieDetail } from '../models/MovieDetail';

export interface IMovieDetailPageProps {
  readonly [Constants.ROUTE_PARAMS.CODE]: string;
}

const MovieDetailPage: React.FC<IMovieDetailPageProps> = ({ code }) => {

  const [movieDetail, setMovieDetail] = React.useState<MovieDetail | undefined>(() => undefined);
  const { eventService }: IServices = useServiceContext();
  const classes = useStyles();

  // Set back button and title in the main app header
  React.useEffect(() => {

    eventService.publishSyncEvent('headerLeftButtonAndTitleSetEvent', {
      leftButton: (
        <Link
          to={Constants.ROUTES.ALL_MOVIES}
          className={classes.backButton}>
          <IconButton
            color='inherit'
            edge='start'
            aria-label='back'>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Link>
      ),
      title: (
        <Typography
          component='h1'
          variant='h6'
          noWrap={true}>
          {/* TODO: Localise content */}
          Movie Details
        </Typography>
      )
    });

    return () => {
      eventService.publishSyncEvent('headerLeftButtonAndTitleSetEvent', {
        leftButton: undefined,
        title: undefined
      });
    };
  }, [classes, eventService]); // TODO: Add translator once localisation is implemented

  // Fetch movie detail
  React.useEffect(() => {
    (async function getMovieDetail(): Promise<void> {
      setMovieDetail(undefined);
      // TODO: Move hard-coded URL to config
      // TODO: Move API call to MovieService that implements IMovieService interface
      // TODO: Interact via IMovieService interface here
      const movieDetailResponse: AxiosResponse = await Axios.request({
        url: `http://localhost:3001/api/v1/movies/${code}`,
        method: 'GET'
      });
      if (movieDetailResponse.data) {
        const _movieDetail: MovieDetail = plainToClass(MovieDetail, movieDetailResponse.data as object, { strategy: 'excludeAll', excludeExtraneousValues: true });
        setMovieDetail(_movieDetail);
      }
    })();
  }, [code]);

  const getLength = React.useCallback((lengthInMins: number) => {
    const hours: number = Math.floor(lengthInMins / 60);
    const mins: number = lengthInMins % 60;
    // TODO: Localise content
    // TODO: Take pluralisation into account, e.g. 1 min, 2 mins
    // TODO: Skip hours if it is 0
    return `${hours} h ${mins} mins`;
  }, []);

  const getRating = React.useCallback((rating: number) => `${rating / 10}/10`, []);

  return (
    <MaxWidthContainer
      maxWidthBreakpoint='md'>
      {movieDetail
        ? <>
          <AppBar
            position='relative'
            color='secondary'
            className={classes.title}
            elevation={0}>
            <Toolbar>
              <Typography
                component='h2'
                variant='h6'>
                {movieDetail.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            container={true}
            spacing={2}
            className={classes.mainContent}>
            <Grid
              item={true}
              xs={12}
              sm={6}>
              <Image
                altText={movieDetail.title}
                pictureUrls={movieDetail.pictureUrls}
                aspectRatio={Constants.IMAGE_ASPECT_RATIO}
              />
            </Grid>
            <Grid
              item={true}
              xs={12}
              sm={6}
              className={classes.flexColumn}>
              <Typography
                component='span'
                variant='h6'>
                {movieDetail.releaseDate.getFullYear()}
              </Typography>
              <Typography
                component='span'
                variant='body1'
                className={classes.lengthInMins}>
                {getLength(movieDetail.lengthInMins)}
              </Typography>
              <Typography
                component='span'
                variant='body1'
                className={classes.rating}>
                {getRating(movieDetail.rating)}
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                className={classes.favouriteButton}>
                {/* TODO: Localise content, e.g. Favourite for en-GB and Favorite for en-US */}
                Add to Favourite
              </Button>
            </Grid>
            {movieDetail.description && (
              <Grid
                item={true}
                xs={12}>
                <Typography
                  component='p'
                  variant='body1'
                  className={classes.description}>
                  {movieDetail.description}
                </Typography>
              </Grid>
            )}
          </Grid>
        </>
        : <div />
      }
    </MaxWidthContainer>
  );
};

export default MovieDetailPage;

const useStyles = makeStyles((theme: Theme) => createStyles({
  backButton: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing(1)
  },
  title: {
    zIndex: theme.zIndex.appBar - 1 // When scrolled, display title header below the main app header
  },
  mainContent: {
    padding: theme.spacing(2)
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  lengthInMins: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(4),
    flexGrow: 1
  },
  rating: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  favouriteButton: {
    fontSize: '1rem',
    borderRadius: 0
  },
  description: {
    marginTop: theme.spacing(4)
  }
}));
