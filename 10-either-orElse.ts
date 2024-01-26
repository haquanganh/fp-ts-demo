import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateEmail = E.fromPredicate(
  (maybeAnEmail: string) => emailRegex.test(maybeAnEmail),
  (invalidEmail) => `${invalidEmail} is not an email` as const
);

const validateLoginName = (loginName: string) =>
  pipe(
    loginName,
    validateEmail,
    E.orElse((e) => E.left(`Really, ${e}`))
  );
console.log('validateLoginName: ', validateLoginName('aaa'));
