import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

const double = (n: number): number => n * 2;

export const imperative = (as: ReadonlyArray<number>): string => {
  const head = (as: ReadonlyArray<number>): number => {
    if (as.length === 0) {
      throw new Error('empty array');
    }
    return as[0];
  };
  const inverse = (n: number): number => {
    if (n === 0) {
      throw new Error('cannot divide by zero');
    }
    return 1 / n;
  };
  try {
    return `Result is ${inverse(double(head(as)))}`;
  } catch (err: any) {
    return `Error is ${err.message}`;
  }
};

export const functional = (as: ReadonlyArray<number>): string => {
  const head = <A>(as: ReadonlyArray<A>): E.Either<string, A> =>
    as.length === 0 ? E.left('empty array') : E.right(as[0]);
  const inverse = (n: number): E.Either<string, number> =>
    n === 0 ? E.left('cannot divide by zero') : E.right(1 / n);
  return pipe(
    as,
    head,
    E.map(double),
    E.flatMap(inverse),
    E.match(
      (err) => `Error is ${err}`, // onLeft handler
      (head) => `Result is ${head}` // onRight handler
    )
  );
};
console.log('functional: ', functional([1, 2, 3]));

// type ApiResponse = {
//   successMessage: string;
//   status: 200;
// };

// type ApiError = {
//   status: 500;
//   message: string;
// };

// type ClientResponse = {
//   type: 'error' | 'success';
//   data: string;
// };

// const apiResponse = (
//   response: ApiResponse | ApiError
// ): E.Either<ClientResponse, ClientResponse> => {
//   if (response.status === 500) {
//     return E.left({ type: 'error', data: response.message });
//   }
//   return E.right({ type: 'success', data: response.successMessage });
// };

// console.log(
//   pipe(
//     apiResponse({ status: 200, successMessage: 'success data' }),
//     E.match(
//       (e) => 'Error',
//       (e) => 'OK'
//     )
//   )
// );
