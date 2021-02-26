import React from "react";
import { useRouter } from "next/router";

const categoria = () => {
  const router = useRouter();

  React.useEffect(() => {
    console.log(router);
  }, []);

  return <div>Aqui va la categoria</div>;
};

export default categoria;
