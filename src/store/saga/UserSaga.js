import { put } from 'redux-saga/effects';
import UserService from '../../services/api/';
import { UserTypes } from '../types';

export function* fetchGithubUsers() {
  try {
    const response = yield UserService.fetchGithubUsersAPI();
    if (response && response.status === 200) {
      yield put({
        type: UserTypes.FETCH_GITHUB_USERS_SUCCESS,
        payload: response?.data,
      });
    } else {
      yield put({ type: UserTypes.FETCH_GITHUB_USERS_FAIL });
      // TODO : will integrate error toast here
    }
  } catch (error) {
    console.warn(error);
    yield put({ type: UserTypes.FETCH_GITHUB_USERS_FAIL });
    // TODO : will integrate error toast here
  }
}

export function* searchGithubUserByName(action) {
  try {
    const { payload } = action;
    const { username } = payload;
    const response = yield UserService.searchGithubUserByUsernameAPI(username);
    if (response && response.status === 200) {
      yield put({
        type: UserTypes.SEARCH_USER_BY_NAME_SUCCESS,
        payload: [response?.data],
      });
    } else {
      yield put({ type: UserTypes.SEARCH_USER_BY_NAME_FAIL });
      // TODO : will integrate error toast here
    }
  } catch (error) {
    console.warn(error);
    yield put({ type: UserTypes.SEARCH_USER_BY_NAME_FAIL });
    // TODO : will integrate error toast here
  }
}
