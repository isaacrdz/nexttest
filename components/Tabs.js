import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "./Carousel";

const useStyles = makeStyles((theme) => ({
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Tabs = ({ categories }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <CarouselComponent data={categories} title="Tipos de Vehiculos" />
    </Container>
  );
};

export default Tabs;
