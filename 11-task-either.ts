import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/Task';
import { pipe } from 'fp-ts/function';

const fetchGreeting = TE.tryCatch<Error, { name: string }>(
  () => new Promise((resolve) => resolve(JSON.parse('{ "name": "Astro" }'))),
  (reason) => new Error(String(reason))
);

fetchGreeting()
  .then((e) =>
    pipe(
      e,
      E.match(
        (err) => `I'm sorry, I don't know who you are. (${err.message})`,
        (x) => `Hello, ${x.name}!`
      )
    )
  )
  .then(console.log);

const log = <A>(x: A) => {
  console.log(x);
  return x;
};

const tasks = [
  pipe(T.delay(200)(T.of('first')), T.map(log)),
  pipe(T.delay(100)(T.of('second')), T.map(log)),
];

// Parallel: logs 'second' then 'first'
T.sequenceArray(tasks)();

// Sequential: logs 'first' then 'second'
T.sequenceSeqArray(tasks)();

import { task } from 'fp-ts';

pipe(
  task.of(2),
  task.chain((x) => task.of(x * 3))
)().then(console.log); // 10
