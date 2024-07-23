import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '../types';
import { fetchGithubUsers, searchGithubUserByName } from './UserSaga';

export function* rootSaga() {
  try {
    yield all([
      takeLatest(UserTypes.FETCH_GITHUB_USERS, fetchGithubUsers),
      takeLatest(UserTypes.SEARCH_USER_BY_NAME, searchGithubUserByName),
    ]);
  } catch (error) {
    console.warn(error);
  }
}
