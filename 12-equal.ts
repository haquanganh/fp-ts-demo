import { array, boolean, date, number, string } from 'fp-ts';
import { Eq, struct } from 'fp-ts/Eq';

boolean.Eq.equals(true, true); // true
date.Eq.equals(new Date('1984-01-27'), new Date('1984-01-27')); // true
number.Eq.equals(3, 3); // true
string.Eq.equals('Cyndi', 'Cyndi'); // true

type Point = {
  x: number;
  y: number;
};

const eqPoint: Eq<Point> = struct({
  x: number.Eq,
  y: number.Eq,
});

eqPoint.equals({ x: 0, y: 0 }, { x: 0, y: 0 }); // true

const eqArrayOfPoints = array.getEq(eqPoint);

eqArrayOfPoints.equals(
  [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
  ],
  [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
  ]
); // true
