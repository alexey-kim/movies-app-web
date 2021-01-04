import { Constants } from '../constants';

export function getMovieDetailPageUrl(code: string): string {
  return Constants.ROUTES.MOVIE_DETAIL.replace(`:${Constants.ROUTE_PARAMS.CODE}`, code);
}
