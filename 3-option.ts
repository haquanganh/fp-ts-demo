import { pipe, identity } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

const inverse = (n: number): O.Option<number> =>
  n === 0 ? O.none : O.some(1 / n);

const result1 = (x: number) =>
  pipe(
    x,
    inverse,
    O.match(
      () => `Cannot get inverse of ${x}`,
      (ix) => `The inverse of ${x} is ${ix}`
    )
  );

const result2 = (x: number) =>
  pipe(
    x,
    inverse,
    O.match(() => 0, identity)
  );

const result3 = (x: number) =>
  pipe(
    x,
    inverse,
    O.getOrElse(() => 0)
  );

const result4 = (x: number) =>
  pipe(
    x,
    inverse,
    O.getOrElseW(() => `Cannot get inverse of ${x}`)
  );

const value1: number | null = 3;
O.fromNullable(value1);

/* #region  */
//   const inverse = (x: number): number => {
//     if (x === 0) {
//       throw new Error('Cannot get inverse of 0.');
//     }
//     return 1 / x;
//   };
/* #endregion */
