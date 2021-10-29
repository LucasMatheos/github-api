import React from "react";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { Repository } from "./components/Repospository";
import { GlobalStyle } from "./Global/styles";
import { GitHubProvider } from "./providers/githubProvider";

function App() {
  return (
    <main>
      <GitHubProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repository />
        </Layout>
      </GitHubProvider>
    </main>
  );
}

export default App;
