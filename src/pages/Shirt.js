import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { shirt } from "../data";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Shirt = () => {
  return (
    <Container>
      {shirt.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Shirt;
