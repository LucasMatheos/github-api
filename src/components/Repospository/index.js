import { useEffect, useState } from "react";
import useGitHub from "../../Hooks/GitHubHooks";
import { RepositoryItems } from "../RepositoryItems";
import {
  WrapperTab,
  WrapperTabList,
  WrapperTabs,
  WrapperTabPanel,
} from "./styled";

export function Repository() {
  const { GitHubState, getUserRepositories } = useGitHub();
  const [hasUserForSearchRepositories, setHasUserForSearchRepositories] =
    useState(false);
  useEffect(() => {
    if (!!GitHubState.user.login) {
      getUserRepositories(!!GitHubState.repositories);
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
            {GitHubState.repositories.map((item) => (
              <RepositoryItems
                key={item.id}
                name={item.name}
                linkRepo={item.html_url}
                fullName={item.full_name}
              />
            ))}
          </WrapperTabPanel>
          <WrapperTabPanel>
            {GitHubState.repositories.map((item) => (
              <RepositoryItems
                key={item.id}
                name={item.name}
                linkRepo={item.html_url}
                fullName={item.full_name}
              />
            ))}
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}
