import { RepositoryItems } from "../RepositoryItems";
import {
  WrapperTab,
  WrapperTabList,
  WrapperTabs,
  WrapperTabPanel,
} from "./styled";

export function Repository() {
  return (
    <WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <WrapperTabList>
        <WrapperTab>Repositories</WrapperTab>
        <WrapperTab>Starred</WrapperTab>
      </WrapperTabList>
      <WrapperTabPanel>
        <RepositoryItems
          name="repo 1"
          linkRepo="https://github.com/LucasMatheos/Genius"
          fullName="LucasMatheos/Genius"
        />
      </WrapperTabPanel>
      <WrapperTabPanel>
        <RepositoryItems />
      </WrapperTabPanel>
    </WrapperTabs>
  );
}
