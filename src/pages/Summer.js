import React from "react";

import Product from "../components/Product";
import { summer } from "../data";
import styled from "styled-components"
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Summer = () => {
  return (
    <Container>
      {summer.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Summer;
