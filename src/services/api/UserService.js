import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

// Not working with auth, its working without auth
// const octokit = new Octokit({
//   auth: process.env.REACT_APP_GITHUB_AUTH_TOKEN,
// });

/**
 * Fetch List of Github users
 * @param
 * @returns response
 */

async function fetchGithubUsersAPI() {
  const response = await octokit.request('GET /users', {
    // headers: {
    //   'X-GitHub-Api-Version': '2022-11-28',
    // },
  });
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
