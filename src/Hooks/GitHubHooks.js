import { useContext } from "react";
import { GitHubContext } from "../providers/githubProvider";

const useGitHub = () => {
  const {
    GitHubState,
    getUser,
    getUserRepositories,
    getUserRepositoriesStarred,
  } = useContext(GitHubContext);
  return {
    GitHubState,
    getUser,
    getUserRepositories,
    getUserRepositoriesStarred,
  };
};

export default useGitHub;
