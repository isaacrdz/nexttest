import React from "react";
import { useRouter } from "next/router";
import CarList from "../../components/autos/CarList";
import Meta from "../../components/Meta";
import { Container, Divider } from "@material-ui/core";

const marca = ({ vehicles }) => {
  const router = useRouter();
  const { marca } = router.query;

  return (
    <>
      <Meta
        title={`Autos tipo ${marca.toUpperCase()}`}
        description={`Busca tu auto por marca ${marca}`}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "50px" }} />
        <h1 style={{ marginBottom: "70px" }}>
          {" "}
          Busqueda por marca: {marca.toUpperCase()}
        </h1>
        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://c1-app-api.herokuapp.com/api/v1/vehicles/vehiclesByMake/${context.params.marca}`
  );

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://c1-app-api.herokuapp.com/api/v1/vehicles`);

//   const vehiclesData = await res.json();

//   const vehicles = vehiclesData.data;

//   const makes = vehicles.map((vehicle) => vehicle.make.name);

//   const paths = makes.map((make) => ({
//     params: { marca: make.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default marca;
