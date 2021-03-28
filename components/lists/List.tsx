import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { pokemonsListQuery } from 'utils/queries';
import { Loading } from 'components/layouts';
import { ListItem } from './';

const List = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(30);
  const { data, loading, error } = useQuery(pokemonsListQuery, {
    variables: {
      offset,
      limit,
    },
  });

  return (
    <>
      {error ? (
        <h2 className="text-xl font-bold text-center">Error</h2>
      ) : loading ? (
        <Loading />
      ) : (
        <div className="flex gap-5 flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          {data.pokemons.map(
            (pokemon) =>
              pokemon !== null && <ListItem key={pokemon.id} {...pokemon} />
          )}
        </div>
      )}
    </>
  );
};

export default List;
