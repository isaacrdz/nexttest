import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

const imageUrl =
  "https://carone.com.mx/wp-content/uploads/2021/02/carone-banner3.jpg";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const makes = [
  {
    name: "Chevrolet",
  },
  {
    name: "Ford",
  },
  {
    name: "Kia",
  },
  {
    name: "MG",
  },
];

const vehicleTypes = [
  {
    name: "Eco",
  },
  {
    name: "Trabajo",
  },
  {
    name: "Sport",
  },
  {
    name: "Urbano",
  },
];

const vehicleModels = [
  {
    name: "Aveo",
  },
  {
    name: "Spark",
  },
  {
    name: "Soul",
  },
  {
    name: "Sorento",
  },
];

const Banner = () => {
  const classes = useStyles();

  const [make, setMake] = React.useState("Marca");
  const [vehicleType, setVehicleType] = React.useState("Tipo");
  const [model, setModel] = React.useState("Modelo");

  const handleChange = (event) => {
    setMake(event.target.value);
  };

  const handleVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  const handleVehicleModel = (event) => {
    setModel(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          style={{
            // height: 450,
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <Container maxWidth="lg" style={{ marginTop: 20 }}>
            <Grid container spacing={3}>
              <Grid item xs={4} style={{ padding: "3em" }}>
                <Paper style={{ padding: 20, paddingBottom: 20 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ marginBottom: 15 }}
                  >
                    Encuentra el auto de tu preferencia
                  </Typography>

                  <form className={classes.root} noValidate autoComplete="off">
                    <div>
                      <TextField
                        style={{ marginBottom: 15 }}
                        fullWidth
                        id="outlined-select-currency-native"
                        select
                        label="Tipo"
                        value={vehicleType}
                        onChange={handleVehicleType}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        {vehicleTypes.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </TextField>

                      <TextField
                        style={{ marginBottom: 15 }}
                        fullWidth
                        id="outlined-select-currency-native"
                        select
                        label="Marca"
                        value={make}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        {makes.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </TextField>

                      <TextField
                        style={{ marginBottom: 15 }}
                        fullWidth
                        id="outlined-select-currency-native"
                        select
                        label="Modelo"
                        value={model}
                        onChange={handleVehicleModel}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        {vehicleModels.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </TextField>
                    </div>
                  </form>

                  <Button
                    size="large"
                    variant="contained"
                    style={{ backgroundColor: "#02216e", color: "white" }}
                    startIcon={<SearchIcon />}
                    fullWidth
                  >
                    Buscar
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Banner;
