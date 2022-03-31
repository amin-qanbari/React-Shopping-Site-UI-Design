import React from "react";
import Product from "../components/Product";
import { autumn } from "../data";
import styled from "styled-components";
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Autumn = () => {
  return (
    <Container>
      {autumn.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Autumn;
