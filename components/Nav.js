import React from "react";
import {
  TextField,
  Box,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import Link from "next/link";

import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const HomeNav = () => (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs>
          <Link href="/" as={`/`}>
            <a>
              <img
                src="https://carone.com.mx/wp-content/uploads/logo.png"
                style={{ width: 180 }}
              />
            </a>
          </Link>
        </Grid>

        <Grid item xs={7}>
          <form onSubmit={() => console.log("onsubmit")}>
            <TextField
              style={{
                backgroundColor: "#f7f8f9",
                border: "1px solid #e6e6ed",
                borderRadius: 10,
              }}
              id="outlined-basic"
              // label="Busca tu automovil"
              placeholder="Encuentra tu automovil"
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
        </Grid>

        <Grid item xs>
          <Box display="flex" alignItems="center">
            <Box p={1} mt={1}>
              <Link href="/autos">
                <Button color="primary">Autos</Button>
              </Link>
            </Box>
            <Box p={1} mt={1}>
              <Link href="/autos">
                <Button color="primary">Favoritos</Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );

  const PageNav = () => (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={2}>
          <Link href="/" as={`/`}>
            <a>
              <img
                src="https://carone.com.mx/wp-content/uploads/logo.png"
                style={{ width: 180 }}
              />
            </a>
          </Link>
        </Grid>

        <Grid item xs={10}>
          <Box display="flex" alignItems="center">
            <Box p={1} mt={1}>
              <Link href="/autos">
                <Button color="primary">Autos</Button>
              </Link>
            </Box>
            <Box p={1} mt={1}>
              <Link href="/autos">
                <Button color="primary">Favoritos</Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );

  return HomeNav();
};

export default Nav;
