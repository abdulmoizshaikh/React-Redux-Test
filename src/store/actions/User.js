import { UserTypes } from '../types';

export default class Action {
  /**
   * Action to fetch list of Github users
   * @param {*} payload
   */
  static fetchGithubUsers(payload) {
    return {
      type: UserTypes.FETCH_GITHUB_USERS,
      payload,
    };
  }

  /**
   * Action to search github user by name
   * @param {*} payload
   */
  static searchGithubUserByName(payload) {
    return {
      type: UserTypes.SEARCH_USER_BY_NAME,
      payload,
    };
  }
}
