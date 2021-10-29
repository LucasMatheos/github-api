import { useContext } from "react";
import { GitHubContext } from "../providers/githubProvider";

const useGitHub = () => {
  const { GitHubState, getUser, getUserRepositories } =
    useContext(GitHubContext);
  return { GitHubState, getUser, getUserRepositories };
};

export default useGitHub;
