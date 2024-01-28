import { pipe } from 'fp-ts/function';

const trim = (s: string) => s.trim();
const size = (s: string) => s.length;
const isAtLeast3 = (n: number) => n >= 3;

// imperative
const dataI = isAtLeast3(size(trim('astro')));
console.log('dataI: ', dataI);

// functional
const data = pipe('astro', trim, size, isAtLeast3);
console.log('data: ', data);
