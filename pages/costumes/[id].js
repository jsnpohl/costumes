import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const CostumePage = () => {
  const router = useRouter();

  return (
    <Layout title={`Costumes | ${router.query.id}`}>
      <h1>My Costume: {router.query.id}</h1>
    </Layout>
  );
};

export default CostumePage;
