import React from "react";
import { Container, Divider, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CarList from "../../components/autos/CarList";
import SearchBarTop from "./SearchBarTop";
import SearchBarBottom from "./SearchBarBottom";

const SearchBar = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
    >
      <SearchBarTop />
      <SearchBarBottom />
    </Container>
  );
};

export default SearchBar;
