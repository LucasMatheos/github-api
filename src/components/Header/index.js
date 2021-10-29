import { Wrapper } from "./styled";
import useGitHub from "../../Hooks/GitHubHooks";
import { useState } from "react";

export function Header() {
  const { getUser } = useGitHub();
  const [usernameForm, setUsernameForm] = useState("");

  const submitGetUser = () => {
    if (!usernameForm) return;

    return getUser(usernameForm);
  };
  return (
    <header>
      <Wrapper>
        <input
          type="text"
          placeholder="Digite o Username:"
          onChange={(event) => setUsernameForm(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </Wrapper>
    </header>
  );
}
