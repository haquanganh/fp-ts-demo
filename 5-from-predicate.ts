import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

const isEven = (a: number) => a % 2 === 0;

const getEven = O.fromPredicate(isEven);

getEven(4);

getEven(5);

type Discount = {
  percentage: number;
  expired: boolean;
};

const isDiscountValid = (discount: Discount) => !discount.expired;
const getDiscountText = (discount: Discount) =>
  pipe(
    discount,
    O.fromPredicate(isDiscountValid),
    O.map(({ percentage }) => `${percentage}% DISCOUNT`)
  );

const discountText = getDiscountText({ expired: false, percentage: 50 });
console.log('discountText: ', discountText);
