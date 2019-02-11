/**
 * TODO: fix Sagas tests.
 * The tests are not working due to a 'redux-saga-test-plan' issue.
 * An error is displayed when running 'npm run test' regarding the module.
 */

import { testSaga } from 'redux-saga-test-plan';
import { fork } from 'redux-saga/effects';
import root, { getPokemons, watchGetPokemons } from './index';
import { getPokemonsSuccess, getPokemonsFailure } from '../actions';
import { GET_POKEMONS_REQUEST, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from '../actions/types';

const pokemonListMock = [{ name: 'foo' }, { name: 'boo' }];

describe('Pokemon list saga', () => {
  const response = pokemonListMock;
  const errorMessage = '404 not found';

  it('getPokemons success', () => {
    const result = {
      type: GET_POKEMONS_SUCCESS,
      response,
    };
    testSaga(getPokemons)
      .next(response)
      .put(getPokemonsSuccess(response))
      .next(result)
      .isDone();
  });

  it('getPokemons error', () => {
    const error = {
      type: GET_POKEMONS_FAILURE,
      error: errorMessage,
    };
    testSaga(getPokemons)
      .throw(errorMessage)
      .put(getPokemonsFailure(errorMessage))
      .next(error)
      .isDone();
  });

  it('watchGetPokemons', () => {
    testSaga(watchGetPokemons)
      .next()
      .take(GET_POKEMONS_REQUEST)
      .fork(getPokemons)
      .finish()
      .isDone();
  });

  it('root', () => {
    testSaga(root)
      .next()
      .all([fork(watchGetPokemons)])
      .next()
      .isDone();
  });
});
