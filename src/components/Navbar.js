import React, { useContext } from "react";
import { mobile } from "../responsive";

//material UI
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

//styled components
import styled from "styled-components";

//react-router-dom
import { Link } from "react-router-dom";
import { setSearchContext } from "../Context/SearchContextProvider";
import { cartContext } from "../Context/CartContextProvider";

const Container = styled.div`
  height: 60px;
  display: flex;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  direction: rtl;
  border: 0.5px solid gray;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-left: 25px;
  padding: 6px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition: all 0.2s ease;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar = () => {
  const setSearchTerm = useContext(setSearchContext);
  const { state } = useContext(cartContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              placeholder="جستجو"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Right>
          <MenuItem>
            <Link to="/">صفحه اصلی</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/allProducts">تمام محصولات</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">ثبت نام</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">ورود</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/shopCart">
              <Badge badgeContent={state.itemsCounter} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
