import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import { pokemonsListQuery } from 'utils/queries';
import { Loading } from 'components/layouts';
import { ListItem } from './';
import { setOffset, setLimit } from 'store/actions/pokemonsAction';

const List = ({ offset, limit, setOffset, setLimit }) => {
  const { data, loading, error } = useQuery(pokemonsListQuery, {
    variables: {
      offset,
      limit,
    },
  });

  useEffect(() => {
    setOffset(0);
    setLimit(20);
  }, []);

  if (error) {
    <h1>Error</h1>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center items-center mx-auto max-w-screen-xl">
        {data.pokemons.map(
          (pokemon) =>
            pokemon !== null && <ListItem key={pokemon.id} {...pokemon} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  offset: state.pokemons.offset,
  limit: state.pokemons.limit,
});

export default connect(mapStateToProps, { setOffset, setLimit })(List);
