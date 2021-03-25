import { useQuery } from '@apollo/client';
import { pokemonListItemQuery } from 'utils/queries';
import { ListItem } from './';

const List = () => {
  const { data, loading, error } = useQuery(pokemonListItemQuery);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center items-center mx-auto max-w-screen-xl">
        {!error ? (
          data.pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h2>Error</h2>
        )}
      </div>
    </>
  );
};

export default List;
