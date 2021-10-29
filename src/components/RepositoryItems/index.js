export function RepositoryItems({ name, linkRepo, fullName }) {
  return (
    <div>
      <h2>{name}</h2>
      <a href={linkRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </div>
  );
}
