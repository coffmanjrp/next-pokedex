import { useQuery } from '@apollo/client';
import { pokemonsListQuery } from 'utils/queries';
import { Loading } from 'components/layouts';
import { ListItem } from './';

const List = () => {
  const { data, loading, error } = useQuery(pokemonsListQuery, {
    variables: {
      offset: 0,
      limit: 151,
    },
  });

  if (error) {
    return <h2 className="text-xl font-bold text-center">Error</h2>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center items-center mx-auto max-w-screen-xl">
        {data &&
          data.pokemons.map(
            (pokemon) =>
              pokemon !== null && <ListItem key={pokemon.id} {...pokemon} />
          )}
      </div>
    </>
  );
};

export default List;
