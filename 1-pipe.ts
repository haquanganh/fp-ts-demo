import { pipe } from 'fp-ts/function';

const trim = (s: string) => s.trim();
const size = (s: string) => s.length;
const isAtLeast3 = (n: number) => n >= 3;

const pineResult = pipe('astro', trim, size, isAtLeast3);

/* #region  */
// return isAtLeast3(size(trim('he')));

/* #endregion */
