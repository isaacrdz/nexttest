import React from "react";
import { Container, Divider, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CarList from "../../components/autos/CarList";

const SearchBarTop = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <form onSubmit={() => console.log("onsubmit")}>
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          id="outlined-basic"
          // label="Busca tu automovil"
          placeholder="Busca marcas, modelos o palabras clave"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: " #a5a5a5" }} />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default SearchBarTop;
