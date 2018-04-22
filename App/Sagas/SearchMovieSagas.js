import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import SearchMovieActions from '../Redux/SearchMovieRedux'

export function* searchMovie(api, action) {
  // make the call to the api
  const { title, year, movieType } = action;
  const response = yield call(api.searchMovie, title, year, movieType)

  if (response.ok) {
    const movies = path(['data'], response);
    // do data conversion here if needed
    yield put(SearchMovieActions.searchMovieSuccess(movies))
  } else {
    yield put(SearchMovieActions.searchMovieFailure())
  }
}
