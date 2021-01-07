import { getMovieDetailPageUrl } from '../urlUtils';

describe('urlUtils', () => {

  describe('getMovieDetailPageUrl', () => {

    it('Should return correct URL', () => {
      expect(getMovieDetailPageUrl('movie-code-123')).toBe('/movies/movie-code-123');
    });
  });
});
