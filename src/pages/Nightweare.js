import React from "react";
import Product from "../components/Product";
import { nightWeare } from "../data";
import styled from "styled-components"
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Nightweare = () => {
  return (
    <Container>
      {nightWeare.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Nightweare;
