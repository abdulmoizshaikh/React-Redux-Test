import { put } from 'redux-saga/effects';
import UserService from '../../services/api/';
import { UserTypes } from '../types';

export function* fetchGithubUsers() {
  try {
    const response = yield UserService.fetchGithubUsersAPI();
    yield put({
      type: UserTypes.FETCH_GITHUB_USERS_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    console.warn(error);
    yield put({
      type: UserTypes.FETCH_GITHUB_USERS_FAIL,
      payload: error?.response?.data,
    });
  }
}

export function* searchGithubUserByName(action) {
  try {
    const { payload } = action;
    const { username } = payload;
    const response = yield UserService.searchGithubUserByUsernameAPI(username);
    yield put({
      type: UserTypes.SEARCH_USER_BY_NAME_SUCCESS,
      payload: [response?.data],
    });
  } catch (error) {
    console.warn(error);
    yield put({
      type: UserTypes.SEARCH_USER_BY_NAME_FAIL,
      payload: error?.response?.data,
    });
  }
}
