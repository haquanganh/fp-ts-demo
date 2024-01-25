import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

type Movie = {
  title: string;
  releaseYear: number;
  ratingPosition: number;
  award?: string;
};

const getMovieAwardHighlight = (movie: Movie): O.Option<string> =>
  pipe(
    movie.award,
    O.fromNullable,
    O.map((award) => `Awarded with: ${award}`)
  );

const getMovieTop10Highlight = (movie: Movie): O.Option<string> =>
  pipe(
    movie,
    O.fromPredicate(({ ratingPosition }) => ratingPosition <= 10),
    O.map(({ ratingPosition }) => `In TOP 10 at position: ${ratingPosition}`)
  );

const getMovieHighlight = (movie: Movie) =>
  pipe(
    movie,
    getMovieAwardHighlight,
    O.alt(() => getMovieTop10Highlight(movie)),
    O.getOrElse(() => `Released in ${movie.releaseYear}`)
  );

console.log(
  'getMovieHighlight: ',
  getMovieHighlight({
    ratingPosition: 12,
    releaseYear: 2023,
    title: 'Marvel',
  })
);
