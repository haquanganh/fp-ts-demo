import { flow } from 'fp-ts/function';

const trim = (s: string) => s.trim();
const size = (s: string) => s.length;
const isAtLeast3 = (n: number) => n >= 3;

const flowFn = flow(trim, size, isAtLeast3);

/* #region  */
//const flowFn = (s: string) => isAtLeast3(size(trim(s)));

/* #endregion */
