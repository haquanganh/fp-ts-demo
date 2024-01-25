import * as E from 'fp-ts/Either';

const jsonParse = (text: string): E.Either<string, unknown> =>
  E.tryCatch(
    () => text,
    (e) => 'Error parsing'
  );

const jsonParse2 = E.tryCatchK(JSON.parse, (e) => 'Error parsing');

console.log(jsonParse('[]'));
