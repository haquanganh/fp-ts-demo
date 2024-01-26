import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/* #region  */
// const head = <A>(array: A[]): O.Option<A> =>
//   array.length === 0 ? O.none : O.some(array[0]);

// const movies = ['Marvel', 'Titanic', 'FF'];

// const getBestMovie = (movies: string[]): O.Option<string> =>
//   pipe(
//     movies,
//     head,
//     O.map((s) => s.toUpperCase()),
//     O.map((s) => `Best - ${s}`)
//   );
// const bestMovieName = getBestMovie(movies);
// console.log('bestMovieName: ', bestMovieName);
/* #endregion */

// /* #region  */
//const inverse = (n: number): O.Option<number> =>
//   n === 0 ? O.none : O.some(1 / n);

// const inverseHead = (nums: number[]) =>
//   pipe(nums, head, O.map(inverse), O.flatten);

// console.log('inverseHead: ', inverseHead([0]));

// const inverseHead2 = (nums: number[]) => pipe(nums, head, O.chain(inverse));
// console.log('inverseHead2: ', inverseHead2([0]));
/* #endregion */
