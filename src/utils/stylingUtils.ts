import { Constants } from '../constants';
import { joinNotEmptyNorWhitespace } from './arrayUtils';
import { isNullOrUndefined } from './checkUtils';

export function css(...classNames: Array<string | undefined>): string {
  return joinNotEmptyNorWhitespace(classNames, ' ');
}

export function asRem(rem: number): string {
  return `${rem}rem`;
}

export function pxToRemNum(px: number): number {
  return px / Constants.CSS_PX_PER_REM;
}

export function pxToRem(px1: number, px2?: number, px3?: number, px4?: number): string {
  let result: string = asRem(pxToRemNum(px1));
  if (!isNullOrUndefined(px2)) {
    result += ` ${asRem(pxToRemNum(px2))}`;
  }
  if (!isNullOrUndefined(px3)) {
    result += ` ${asRem(pxToRemNum(px3))}`;
  }
  if (!isNullOrUndefined(px4)) {
    result += ` ${asRem(pxToRemNum(px4))}`;
  }
  return result;
}
