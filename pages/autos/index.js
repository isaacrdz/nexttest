import React from "react";
import { Container, Divider } from "@material-ui/core";
import CarList from "../../components/autos/CarList";
import SearchBar from "../../components/autos/SearchBar";
import Meta from "../../components/Meta";

const index = ({ vehicles }) => {
  return (
    <>
      <Meta
        title="Busca tu Auto - Car One Group"
        description="Busca tu Auto Nuevo"
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />
        <SearchBar />
        <Divider style={{ marginBottom: "50px" }} />

        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://c1-app-api.herokuapp.com/api/v1/vehicles?page=1&limit=12"
  );

  const vehicles = await res.json();
  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

export default index;
