import React from "react";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CarCardItem from "./CarCardItem";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    marginBottom: 30,
  },
}));

const CarCardList = ({ title, data, columns }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <h1 style={{ marginBottom: "70px" }}>{title}</h1>
      <Grid container spacing={5}>
        {data.map((make) => (
          <Grid item xs={3} sm={3} md={3} lg={3} className={classes.categories}>
            <CarCardItem data={make} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarCardList;
