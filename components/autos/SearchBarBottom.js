import React from "react";
import { Container, Divider, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CarList from "../../components/autos/CarList";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: 2,
      width: "33%",
    },
  },

  selectFields: {
    color: "red",
  },

  selectOption: {
    fontSize: 30,
  },
}));

const SearchBarBottom = () => {
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
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
      >
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          className={classes.selectFields}
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
            <option
              key={option.name}
              value={option.name}
              className={classes.selectOption}
            >
              {option.name}
            </option>
          ))}
        </TextField>

        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
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
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
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
            <option
              key={option.name}
              value={option.name}
              style={{ color: "#a5a5a" }}
            >
              {option.name}
            </option>
          ))}
        </TextField>
      </form>
    </div>
  );
};

export default SearchBarBottom;
