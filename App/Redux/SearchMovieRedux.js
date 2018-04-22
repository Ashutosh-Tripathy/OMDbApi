import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchMovieRequest: [],
  searchMovieSuccess: ['searchMovie'],
  searchMovieFailure: null
})

export const SearchMovieTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  movies: [],
  fetching: null,
  error: null,
})

/* ------------- Selectors ------------- */


/* ------------- Reducers ------------- */

// request the searchMovie for a state
export const request = (state) =>
  state.merge({ fetching: true, movies: [] })

// successful searchMovie lookup
export const success = (state, action) => {
  const { searchMovie } = action
  let movies = searchMovie;
  return state.merge({ fetching: false, error: null, movies })
}

// failed to get the searchMovie
export const failure = (state) =>
  state.merge({ fetching: false, error: true, movies: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_MOVIE_REQUEST]: request,
  [Types.SEARCH_MOVIE_SUCCESS]: success,
  [Types.SEARCH_MOVIE_FAILURE]: failure
})
