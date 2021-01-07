import { asRem, css, pxToRem, pxToRemNum } from '../stylingUtils';

describe('stylingUtils', () => {

  describe('css', () => {

    const scenarios: Array<[string[], string]> = [
      [[], ''],
      [['class-name-1'], 'class-name-1'],
      [['class-name-1', 'class-name-2'], 'class-name-1 class-name-2']
    ];
    scenarios.forEach(([classNames, expectedClassName]) => {
      it(`Should join class names correctly for [${classNames}]`, () => {
        expect(css(...classNames)).toBe(expectedClassName);
      });
    });
  });

  describe('asRem', () => {

    it(`Should append 'rem' correctly`, () => {
      expect(asRem(10)).toBe('10rem');
    });
  });

  describe('pxToRemNum', () => {

    [
      [8, 0.5],
      [16, 1],
      [32, 2]
    ].forEach(([px, expectedRemNum]) => {
      it(`Should convert px to rem correctly for [${px}]`, () => {
        expect(pxToRemNum(px)).toBe(expectedRemNum);
      });
    });
  });

  describe('pxToRem', () => {

    it('Should convert px to rem correctly', () => {
      expect(pxToRem(8)).toBe('0.5rem');
      expect(pxToRem(8, 32)).toBe('0.5rem 2rem');
      expect(pxToRem(8, 32, 16)).toBe('0.5rem 2rem 1rem');
      expect(pxToRem(8, 32, 16, 64)).toBe('0.5rem 2rem 1rem 4rem');
    });
  });
});
