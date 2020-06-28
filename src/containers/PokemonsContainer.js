import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Pokemon } from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 150 },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4} className="container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </Grid>
    </div>
  );
}
