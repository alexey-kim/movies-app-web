import { isNullOrUndefined } from '../checkUtils';

describe('checkUtils', () => {

  describe('isNullOrUndefined', () => {

    [null, undefined].forEach(value => {
      it(`Should return true for [${value}]`, () => {
        expect(isNullOrUndefined(value)).toBe(true);
      });
    });

    [
      true, false,
      -123, 0, 123,
      '', ' ', 'text',
      [], [1, 2, 3],
      {}, { a: 123 },
      new Date()
    ].forEach(value => {
      it(`Should return false for [${value}]`, () => {
        expect(isNullOrUndefined(value)).toBe(false);
      });
    });
  });
});
