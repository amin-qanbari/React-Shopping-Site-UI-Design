import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { autumn } from "../data";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LightJacket = () => {
  return (
    <Container>
      {autumn.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default LightJacket;
