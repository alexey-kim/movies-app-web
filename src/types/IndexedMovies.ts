import { Movie } from '../models/Movie';

export type IndexedMovies = { [pageIndex: number]: Movie[] | undefined };
