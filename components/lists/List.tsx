import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { pokemonsListQuery } from 'utils/queries';
import { Loading } from 'components/layouts';
import { ListItem } from './';
import { setOffset, setLimit } from 'store/actions/pokemonsAction';

const List = () => {
  const dispatch = useDispatch();
  const { offset, limit } = useSelector((state) => state.pokemons);

  const { data, loading, error } = useQuery(pokemonsListQuery, {
    variables: {
      offset,
      limit,
    },
  });

  useEffect(() => {
    dispatch(setOffset(0));
    dispatch(setLimit(40));
  }, []);

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
