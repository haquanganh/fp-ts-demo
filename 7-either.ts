import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

type ApiResponse = {
  successMessage: string;
  status: 200;
};

type ApiError = {
  status: 500;
  message: string;
};

type ClientResponse = {
  type: 'error' | 'success';
  data: string;
};

const apiResponse = (
  response: ApiResponse | ApiError
): E.Either<ClientResponse, ClientResponse> => {
  if (response.status === 500) {
    return E.left({ type: 'error', data: response.message });
  }
  return E.right({ type: 'success', data: response.successMessage });
};

console.log(
  pipe(
    apiResponse({ status: 200, successMessage: 'success data' }),
    E.match(
      (e) => 'Error',
      (e) => 'OK'
    )
  )
);
