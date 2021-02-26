import React from "react";
import { useRouter } from "next/router";

const Marca = () => {
  const router = useRouter();

  React.useEffect(() => {
    console.log(router);
  }, []);

  return <div>Aqui va la Marca</div>;
};

export default Marca;
