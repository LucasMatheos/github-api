import { createContext, useCallback, useState } from "react";
import { api } from "../services/api";

export const GitHubContext = createContext({
  hasUser: false,
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

export function GitHubProvider({ children }) {
  const [GitHubState, setGitHubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      avatar_url: undefined,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    api.get(`/users/${username}`).then((response) => {
      setGitHubState((prevState) => ({
        ...prevState,
        loading: true,
        hasUser: true,
        user: {
          id: response.data.id,
          login: response.data.login,
          name: response.data.name,
          html_url: response.data.html_url,
          blog: response.data.blog,
          company: response.data.company,
          location: response.data.location,
          followers: response.data.followers,
          following: response.data.following,
          public_gists: response.data.public_gists,
          public_repos: response.data.public_repos,
          avatar_url: response.data.avatar_url,
        },
      }));
    });
  };

  const getUserRepositories = () => {
    api.get(`/users/${GitHubState.user.login}/repos`).then(({ data }) => {
      setGitHubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const contextValue = {
    GitHubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepositories: useCallback(() => getUserRepositories(), []),
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
}
