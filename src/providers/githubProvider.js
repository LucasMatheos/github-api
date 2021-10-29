import { createContext, useCallback, useState } from "react";
import { api } from "../services/api";

export const GitHubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

export function GitHubProvider({ children }) {
  const [GitHubState, setGitHubState] = useState({
    loading: false,
    user: {
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
    api.get(`/users/${username}`).then((response) =>
      setGitHubState({
        user: {
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
      })
    );
    console.log(GitHubState);
  };

  const contextValue = {
    GitHubState,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
}
