import React, { useContext } from "react";

//material-ui/core
import { Badge } from "@material-ui/core";

//material-ui/icon
import { ShoppingCartOutlined } from "@material-ui/icons";

//styled-components
import styled from "styled-components";

//react-router-dom
import { useNavigate } from "react-router-dom";

//context
import { cartContext } from "../Context/CartContextProvider";

const Container = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  cursor: pointer;
  z-index: 100000;
`;

const Div = styled.div`
  position: absolute;
  background-color: red;
  top: -6px;
  left: -7px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 0.4rem;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 10px;

`;

const Div2 = styled.div`
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartCountButton = () => {
  const { state } = useContext(cartContext);
  const navigate = useNavigate()
  return (
    <div>
      <Container onClick={() => navigate("/shopCart") }>
        <Div>
          <Badge badgeContent={state.itemsCounter}></Badge>
        </Div>
        <Div2>
          <ShoppingCartOutlined style={{fontSize:"16px"}}/>
        </Div2>
      </Container>
    </div>
  );
};

export default CartCountButton;
