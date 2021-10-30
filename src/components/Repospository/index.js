import { useEffect, useState } from "react";
import useGitHub from "../../Hooks/GitHubHooks";
import { RepositoryItems } from "../RepositoryItems";
import {
  WrapperTab,
  WrapperTabList,
  WrapperTabs,
  WrapperTabPanel,
  WrapperList,
} from "./styled";

export function Repository() {
  const { GitHubState, getUserRepositories, getUserRepositoriesStarred } =
    useGitHub();
  const [hasUserForSearchRepositories, setHasUserForSearchRepositories] =
    useState(false);
  useEffect(() => {
    if (!!GitHubState.user.login) {
      getUserRepositories(GitHubState.user.login);
      getUserRepositoriesStarred(GitHubState.user.login);
      setHasUserForSearchRepositories(true);
    }
  }, [GitHubState.user.login]);

  return (
    <>
      {hasUserForSearchRepositories ? (
        <WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <WrapperTabList>
            <WrapperTab>Repositories</WrapperTab>
            <WrapperTab>Starred</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperList>
              {GitHubState.repositories.map((item) => (
                <RepositoryItems
                  key={item.id}
                  name={item.name}
                  linkRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperList>
              {GitHubState.starred.map((item) => (
                <RepositoryItems
                  key={item.id}
                  name={item.name}
                  linkRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}
