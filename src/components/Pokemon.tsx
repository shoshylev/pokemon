import { useEffect, useState } from "react";
import { Pokemon as PokemonModel } from "../types/pokemon";
import Ability from "./Ability";
import { Link } from "react-router-dom";

export default function Pokemon({ name }: { name: string }) {
  const [data, setData] = useState<PokemonModel>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      res.json().then((json) => setData(json))
    );
  }, []);

  if (!data) return <></>;

  return (
    <>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      {data.abilities.map((ability, index) => (
        <Link
          to={`ability/${ability.ability.name}`}
          key={`ability${name}${index}`}
        >
          <Ability
            key={`ability${name}${index}`}
            displayName={ability.ability.name}
          />
        </Link>
      ))}
    </>
  );
}
