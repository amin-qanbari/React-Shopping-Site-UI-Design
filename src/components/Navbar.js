import React, { useContext } from "react";
import { mobile } from "../responsive";

//material UI
import {
  Search,
  KeyboardArrowDown,
} from "@material-ui/icons";


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
  display: flex;
  flex-direction: column;
  z-index: 100;
  cursor: pointer;
  margin-left: 25px;
  transition: all 0.2s ease;
  position: relative;
  direction: rtl;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  a {
    text-decoration: none;
    color: black;
  }
  &:hover{
    Ul {
      display: flex;
    }
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;

`;

const Ul = styled.ul`
  width: 100px;
  position: absolute;
  direction: rtl;
  top: 0;
  list-style-type: none;
  margin-top: 25px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  transition: transform 0.2s ease;
  opacity: 0.9;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  display: ${(props) => (props.open ? "flex" : "none")};
`;
const Li = styled.li`
  padding: 5px;
  margin: 5px 0;
  width: 100%;
  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  const setSearchTerm = useContext(setSearchContext);





  return (
    <Container id="top">
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
            <Span>
              محصولات ما
              <KeyboardArrowDown />
            </Span>
            <Ul >
              <Li>
                <Link to="">تابستانی</Link>
              </Li>
              <Li>
                <Link to="">پاییزی</Link>
              </Li>
              <Li>
                <Link to="">تی شرت</Link>
              </Li>
              <Li>
                <Link to="">پیراهن</Link>
              </Li>
              <Li>
                <Link to="">لباس خواب</Link>
              </Li>
              <Li>
                <Link to="">همه محصولات</Link>
              </Li>
            </Ul>
          </MenuItem>
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
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
