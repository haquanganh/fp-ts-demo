import { flow } from 'fp-ts/function';

const trim = (s: string) => s.trim();
const size = (s: string) => s.length;
const isAtLeast3 = (n: number) => n >= 3;

const flowEx = () => {
  return flow(trim, size, isAtLeast3);
  /* #region  */
  //return (s: string) => isAtLeast3(size(trim(s)));

  /* #endregion */
};

const flowFn = flowEx();
console.log('flowFn: ', flowFn('astro'));
