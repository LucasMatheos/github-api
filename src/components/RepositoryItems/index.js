import { Wrapper, WrapperTitle, WrapperFullName, WrapperLink } from "./styled";

export function RepositoryItems({ name, linkRepo, fullName }) {
  return (
    <Wrapper>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>Full name:</WrapperFullName>
      <WrapperLink href={linkRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperLink>
    </Wrapper>
  );
}
