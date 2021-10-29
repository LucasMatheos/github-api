import App from "./App";
import { GlobalStyle } from "./Global/styles";
import { GitHubProvider } from "./providers/githubProvider";

function Provider() {
  return (
    <main>
      <GitHubProvider>
        <GlobalStyle />
        <App />
      </GitHubProvider>
    </main>
  );
}

export default Provider;
