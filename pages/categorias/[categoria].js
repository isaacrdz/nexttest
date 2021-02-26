import React from "react";
import { useRouter } from "next/router";
import CarList from "../../components/autos/CarList";
import Meta from "../../components/Meta";
import { Container, Divider } from "@material-ui/core";

const categoria = ({ vehicles }) => {
  const router = useRouter();
  const { categoria } = router.query;

  return (
    <>
      <Meta
        title={`Autos tipo ${categoria.toUpperCase()}`}
        description={`Busca tu auto tipo ${categoria}`}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />

        <Divider style={{ marginBottom: "50px" }} />

        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://c1-app-api.herokuapp.com/api/v1/vehicles?modelType=${context.params.categoria}`
  );

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://c1-app-api.herokuapp.com/api/v1/vehicles`);

  const vehiclesData = await res.json();

  const vehicles = vehiclesData.data;

  const categories = vehicles.map((vehicle) => vehicle.modelType);

  const paths = categories.map((category) => ({
    params: { categoria: category.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default categoria;
