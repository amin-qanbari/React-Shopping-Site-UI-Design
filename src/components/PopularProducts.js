//usecontext
import { useContext } from "react";

//styled-compnents
import styled from "styled-components";

//data
import { popularProducts } from "../data";

//components
import Product from "./Product";

//context
import { searchContext } from "../Context/SearchContextProvider";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h2`
  padding: 0px 30px;
  direction: rtl;
`;
const PopularProducts = () => {
  const searchTerm = useContext(searchContext);
  return (
    <>
      <Title>اجناس محبوب :</Title>
      <Container>
        {popularProducts
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((item) => (
            <Product item={item} key={item.id} />
          ))}
      </Container>
    </>
  );
};

export default PopularProducts;
