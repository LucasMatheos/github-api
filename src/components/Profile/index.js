import useGitHub from "../../Hooks/GitHubHooks";
import { Wrapper, WrapperCounter, WrapperUserInfo } from "./styled";

export function Profile() {
  const { GitHubState } = useGitHub();
  return (
    <Wrapper>
      <img src={GitHubState.user.avatar_url} alt="User's Avatar" />
      <div className="WrapperUserSide">
        <h1>{GitHubState.user.name}</h1>
        <WrapperUserInfo>
          <h3>Username:</h3>
          <a href={GitHubState.user.html_url} target="_blank" rel="noreferrer">
            {GitHubState.user.login}
          </a>
        </WrapperUserInfo>

        <WrapperUserInfo>
          <h3>Company: </h3>
          <span>{GitHubState.user.company}</span>
        </WrapperUserInfo>

        <WrapperUserInfo>
          <h3>Location: </h3>
          <span>{GitHubState.user.location}</span>
        </WrapperUserInfo>

        <WrapperCounter>
          <div>
            <h3>Repositorios: </h3>
            <span>{GitHubState.user.public_repos}</span>
          </div>
          <div>
            <h3>Gists: </h3>
            <span>{GitHubState.user.public_gists}</span>
          </div>
          <div>
            <h3>Followers: </h3>
            <span>{GitHubState.user.followers}</span>
          </div>
          <div>
            <h3>Followings: </h3>
            <span>{GitHubState.user.following}</span>
          </div>
        </WrapperCounter>
      </div>
    </Wrapper>
  );
}