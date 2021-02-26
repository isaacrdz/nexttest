import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "./Carousel";

const tabs = [
  {
    _id: 1,
    category: "urbano",
    img:
      "https://carone.com.mx/wp-content/uploads/2021/02/Dodge-Charger-2021_Triple-Nickel.png",
  },
  {
    _id: 2,
    category: "sport",
    img:
      "https://carone.com.mx/wp-content/uploads/2021/02/Dodge-Challenger-2021-colores_Triple-Nickel.png",
  },
  {
    _id: 3,
    category: "eco",
    img: "https://carone.com.mx/wp-content/uploads/2021/02/SILKY-SILVER-1.png",
  },
  {
    _id: 4,
    category: "trabajo",
    img: "https://carone.com.mx/wp-content/uploads/2021/02/RANGER-1.png",
  },
  {
    _id: 5,
    category: "amistoso",
    img: "https://carone.com.mx/wp-content/uploads/2021/02/EXPEDITION.png",
  },
  {
    _id: 6,
    category: "casual",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/tahoe.png",
  },
  {
    _id: 7,
    category: "atrevido",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/equnox.png",
  },
  {
    _id: 8,
    category: "espacio",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/aveo.png",
  },
  {
    _id: 9,
    category: "audaz",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/cheyenne.png",
  },
  {
    _id: 10,
    category: "casual",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/cavalier.png",
  },
  {
    _id: 11,
    category: "casual",
    img: "https://carone.com.mx/wp-content/uploads/2021/01/beat-hb.png",
  },

  {
    _id: 12,
    category: "lujoso",
    img:
      "https://carone.com.mx/wp-content/uploads/2021/02/Dodge-Charger-2021_Triple-Nickel.png",
  },
];

const useStyles = makeStyles((theme) => ({
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Tabs = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <CarouselComponent data={tabs} title="Tipos de Vehiculos" />
    </Container>
  );
};

export default Tabs;
