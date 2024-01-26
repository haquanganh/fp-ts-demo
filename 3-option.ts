import { pipe, identity } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

const inverse = (n: number): O.Option<number> =>
  n === 0 ? O.none : O.some(1 / n);

const result = (x: number) =>
  pipe(
    x,
    inverse,
    O.match(
      () => 0,
      (ix) => ix
    )
  );

const result2 = (x: number) =>
  pipe(
    x,
    inverse,
    O.getOrElse(() => 0)
  );

const result3 = (x: number) =>
  pipe(
    x,
    inverse,
    O.getOrElseW(() => `Cannot get inverse of ${x}`)
  );

// const result4 = (x: number) =>
//   pipe(
//     x,
//     inverse,
//     O.match(
//       () => `Cannot get inverse of ${x}`,
//       (ix) => `The inverse of ${x} is ${ix}`
//     )
//   );

const value1: number | null = 3;
O.fromNullable(value1);

const double = (n: number): number => n * 2;

// export const imperative = (as: ReadonlyArray<number>): string => {
//   const head = (as: ReadonlyArray<number>): number => {
//     if (as.length === 0) {
//       throw new Error()
//     }
//     return as[0]
//   }
//   const inverse = (n: number): number => {
//     if (n === 0) {
//       throw new Error()
//     }
//     return 1 / n
//   }
//   try {
//     return `Result is ${inverse(double(head(as)))}`
//   } catch (e) {
//     return 'no result'
//   }
// }

//   const inverse = (x: number): number => {
//     if (x === 0) {
//       throw new Error('Cannot get inverse of 0.');
//     }
//     return 1 / x;
//   };

// export const functional = (as: ReadonlyArray<number>): string => {
//   const head = <A>(as: ReadonlyArray<A>): O.Option<A> =>
//     as.length === 0 ? O.none : O.some(as[0]);
//   const inverse = (n: number): O.Option<number> =>
//     n === 0 ? O.none : O.some(1 / n);
//   return pipe(
//     as,
//     head,
//     O.map(double),
//     O.flatMap(inverse),
//     O.match(
//       () => 'no result', // onNone handler
//       (head) => `Result is ${head}` // onSome handler
//     )
//   );
// };
