import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

type Car = {
  model: string;
  year: number;
  top: number;
};

const isCarTop10 = (car: Car) =>
  car.top <= 10 ? O.some(`${car.model} is top 10`) : O.none;

const isRecentModel = (car: Car) =>
  car.year >= 2010 ? O.some(`${car.model} is recent model`) : O.none;

const getTopCar = (movie: Car) =>
  pipe(
    movie,
    isCarTop10,
    O.orElse(() => isRecentModel(movie)),
    O.getOrElse(() => `${movie.model} is not in top 10`)
  );
console.log('getTopCar: ', getTopCar({ model: 'Toyota', top: 11, year: 2024 }));
