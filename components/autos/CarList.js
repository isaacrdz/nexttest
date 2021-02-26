import React from "react";
import { Container, Grid } from "@material-ui/core";

import CarListCard from "./CarListCard";

const CarList = ({ vehicles }) => {
  return (
    <Grid container spacing={5}>
      {vehicles.map((vehicle) => (
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <CarListCard vehicle={vehicle} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarList;
