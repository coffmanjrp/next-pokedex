import { useQuery } from '@apollo/client';
import { pokemonListItemQuery } from 'utils/queries';
import { ListItem } from './';

const List = () => {
  const { data, loading, error } = useQuery(pokemonListItemQuery, {
    variables: {
      offset: 0,
      limit: 151,
    },
  });

  if (error) {
    return <h2 className="text-xl font-bold text-center">Error</h2>;
  }

  if (loading) {
    return <h2 className="text-xl font-bold text-center">Loading...</h2>;
  }

  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center items-center mx-auto max-w-screen-xl">
        {data &&
          data.pokemons.map((pokemon) => (
            <ListItem key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  );
};

export default List;
