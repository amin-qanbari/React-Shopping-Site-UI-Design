import { Link } from "react-router-dom";
import styled from "styled-components";

//responsive
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Linked = styled(Link)`
  border: none;
  background-color: white;
  color: gray;
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Linked
          to={
            item.id === 1
              ? "/shirt"
              : item.id === 2
              ? "/t-shirt"
              : "/lightJacket"
          }
        >
          SHOP NOW
        </Linked>
      </Info>
    </Container>
  );
};

export default CategoryItem;
