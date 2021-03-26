import { typeColors } from 'utils';
import styles from 'styles/ListItem.module.scss';

type Props = {
  id: number;
  name: string;
  species: {
    genera: {
      genus: string;
      language: {
        name;
      };
    }[];
  };
  sprites: {
    front_default: string;
  };
  types: {
    name: string;
    type: {
      name: string;
    };
  }[];
};

const ListItem = ({ id, name, sprites, species, types }: Props) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center p-5 rounded-lg text-center ${styles.listItem}`}
        style={{ backgroundColor: typeColors[types[0].name] }}
      >
        <div className={`relative w-28 h-28 ${styles.imageContainer}`}>
          <img
            src={sprites.front_default}
            alt={name}
            className="absolute top-2/4 left-2/4"
          />
        </div>
        <div className="mt-5">
          <div
            className={`inline-block w-12 shadow-sm rounded-xl ${styles.number}`}
          >
            No.{id}
          </div>
          <h3 className={`text-xl font-bold  ${styles.name}`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h3>
          <p className={`text-sm ${styles.species}`}>
            {species.genera.find((gen) => gen.language.name === 'en').genus}
          </p>
          <small
            className={`flex justify-around items-center mt-3 text-center ${styles.type}`}
          >
            {types.map((type, index) => (
              <span
                key={index}
                className="inline-block w-14 rounded-xl"
                style={{ backgroundColor: typeColors[type.name] }}
              >
                {type.name}
              </span>
            ))}
          </small>
        </div>
      </div>
    </>
  );
};

export default ListItem;
