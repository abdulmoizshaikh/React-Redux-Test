import { UserTypes } from '../types';

const INITIAL_STATE = {
  isLoading: false,
  users: [],
  error: null,
};

function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserTypes.FETCH_GITHUB_USERS:
      return { ...state, isLoading: true };

    case UserTypes.FETCH_GITHUB_USERS_SUCCESS:
      return { ...state, users: action.payload, isLoading: false };

    case UserTypes.FETCH_GITHUB_USERS_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case UserTypes.SEARCH_USER_BY_NAME:
      return { ...state, isLoading: true };

    case UserTypes.SEARCH_USER_BY_NAME_SUCCESS:
      return { ...state, users: action.payload, isLoading: false };

    case UserTypes.SEARCH_USER_BY_NAME_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}

export default UserReducer;
