export const PokemonDetails = (props) => {
  const { pokemon } = props;

  if (pokemon === null) {
    return null;
  }

  return (
    <div style={{ border: '2px solid lightblue', padding: 10 }}>
      <h3>I choose you: {pokemon.name}</h3>
      <p>Abilities:</p>
      <ol style={{ display: 'inline-block' }}>
        {pokemon.abilities.map((abilityInfo) => {
          return <li>{abilityInfo.ability.name}</li>;
        })}
      </ol>

      {Object.values(pokemon.sprites)
        .filter((url) => typeof url === 'string')
        .map((url) => (
          <img src={url} alt={'Pokemon'} />
        ))}
    </div>
  );
};
