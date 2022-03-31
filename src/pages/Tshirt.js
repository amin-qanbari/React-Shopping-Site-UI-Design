import React from "react";
import styled from "styled-components";
//data
import { tshirt } from "../data";

//components
import Product from "../components/Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Tshirt = () => {
  return (
    <Container>
        {tshirt.map((item) => (
            <Product key={item.id} item={item} />
        ))}
    </Container>
  );
};

export default Tshirt;
