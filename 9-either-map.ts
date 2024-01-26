import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

import * as J from 'fp-ts/Json';

const response = (
  data: unknown
): E.Either<{ error: string }, { data: string }> => {
  return pipe(
    data,
    J.stringify,
    E.map((s) => ({ data: s })),
    E.mapLeft((e) => ({ error: String(e) }))
  );
};

const response2 = (
  data: unknown
): E.Either<{ error: string }, { data: string }> => {
  return pipe(
    data,
    J.stringify,
    E.bimap(
      (e) => ({ error: String(e) }),
      (s) => ({ data: s })
    )
  );
};
