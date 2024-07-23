import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

/**
 * Fetch List of Github users
 * @param
 * @returns response
 */

async function fetchGithubUsersAPI() {
  const response = await octokit.request('GET /users');
  return response;
}

/**
 * Search Github User by username
 * @param name
 * @returns response
 */

async function searchGithubUserByUsernameAPI(username) {
  const response = await octokit.request(`GET /users/${username}`);
  return response;
}

export const UserService = {
  fetchGithubUsersAPI,
  searchGithubUserByUsernameAPI,
};
