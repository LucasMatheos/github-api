import { useContext } from "react";
import { GitHubContext } from "../providers/githubProvider";

const useGitHub = () => {
  const { GitHubState, getUser } = useContext(GitHubContext);
  return { GitHubState, getUser };
};

export default useGitHub;
