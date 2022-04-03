import React, { useContext } from "react";

//styled-components
import styled from "styled-components";

//material ui
import { Add, Remove, Delete } from "@material-ui/icons";

//responsive
import { mobile } from "../responsive";
import { cartContext } from "../Context/CartContextProvider";

const Info = styled.div`
  flex: 3;
  display: flex;
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: aliceblue;
  margin: 15px 0;
  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const AddContainer = styled.div`
  color: green;
`;

const RemoveContainer = styled.div`
  color: red;
`;
const TrashContainer = styled.div``;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Cart = ({ data }) => {
  const { dispatch } = useContext(cartContext);
  const { img, price, title, quantity } = data;
  return (
    <Info>
      <Product>
        <ProductDetail>
          <Image src={img} />
          <Details>
            <ProductName>
              <b>Product:</b> {title}
            </ProductName>

            <ProductSize>
              <b>Size:</b> 37.5
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <AddContainer
              onClick={() => dispatch({ type: "INCREASE", payload: data })}
            >
              <Add />
            </AddContainer>
            <ProductAmount>{quantity}</ProductAmount>
            {quantity > 1 ? (
              <RemoveContainer
                onClick={() => dispatch({ type: "DECREASE", payload: data })}
              >
                <Remove />
              </RemoveContainer>
            ) : (
              <TrashContainer onClick={() => dispatch({type:"REMOVE_ITEM" , payload : data})}>
                <Delete />
              </TrashContainer>
            )}
          </ProductAmountContainer>
          <ProductPrice>$ {price}</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </Info>
  );
};

export default Cart;
