import React from "react";
import {
  Grid,
  Chip,
  CardHeader,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    backgroundSize: "contain",
  },
  heart: {
    marginTop: 10,
  },
  card: {
    textAlign: "center",
  },
  gridItem: {
    width: 400,
  },
  attacks: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
}));

export function Pokemon({ pokemon }) {
  const classes = useStyles();

  return (
    <Grid className={classes.gridItem} item>
      <Card item xs={12} className={classes.card}>
        <CardActionArea>
          <CardContent>
            <CardHeader title={pokemon.name} />
            <CardMedia
              image={pokemon.image}
              title={pokemon.name}
              className={classes.media}
            />
            <div className={classes.heart}>
              <Chip
                icon={<FavoriteIcon />}
                variant="outlined"
                color="secondary"
                label={pokemon.maxHP}
              />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.attacks}>
            {pokemon.attacks.special.slice(0, 3).map((attack) => (
              <Chip
                variant="outlined"
                color="primary"
                label={attack.name}
                key={`${attack.name}-${attack.damage}`}
              />
            ))}
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
