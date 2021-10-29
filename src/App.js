import React from "react";
import { Layout } from "./components/Layout";
import { NoSearch } from "./components/NoSearch";
import { Profile } from "./components/Profile";
import { Repository } from "./components/Repospository";
import useGitHub from "./Hooks/GitHubHooks";

function App() {
  const { GitHubState } = useGitHub();
  return (
    <Layout>
      {GitHubState.hasUser ? (
        <>
          {GitHubState.loading ? (
            <>
              <Profile />
              <Repository />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
