//usecontext
import { useContext } from "react";

//Link react-router-dom
import { Link } from "react-router-dom";

//img svg
import empty from "../images/empty-cart.svg";

//context
import { cartContext } from "../Context/CartContextProvider";

//styled-components
import styled from "styled-components";

//components
import Cart from "../components/Cart";

//helper
import { discount } from "../helper/function";

//responsive
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const CheckoutButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  &:hover {
    transform: scale(1.01);
    background-color: green;
  }

`;

const ClearButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    transform: scale(1.01);
    background-color: red;
    color: white;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.01);
    background-color: green;
  }
`;

const Checkout = styled.div`
  text-align: center;
  margin-top: 200px;
  line-height: 90px;
  h3 {
    color: rgb(18, 129, 18);
  }
  a {
    text-decoration: none;
    color: rgb(91, 91, 238);
    font-weight: bold;
  }
`;

const Clear = styled.div`
  text-align: center;
  margin-top: 70px;

  a {
    text-decoration: none;
  }
`;

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);
  console.log(state.selectedItems);
  return (
    <Container>
      <Wrapper>
        <Title>سبد خرید</Title>
        <Top>
          <ClearButton onClick={() => dispatch({type:"CLEAR"})}>حذف سبد خرید</ClearButton>
          <TopTexts>
            <TopText>تعداد سفارشات({state.itemsCounter})</TopText>
          </TopTexts>
          <CheckoutButton
            type="filled"
            onClick={() => dispatch({ type: "CHECKOUT" })}
          >
            پرداخت سفارش
          </CheckoutButton>
        </Top>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
        {state.itemsCounter > 0 && (
          <Bottom>
            <Summary>
              <SummaryTitle>فاکتور</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>جمع کل </SummaryItemText>
                <SummaryItemPrice>$ {state.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>تخفیف</SummaryItemText>
                <SummaryItemPrice>$ {discount(state.total)}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>مبلغ پرداختی</SummaryItemText>
                <SummaryItemPrice>$ {state.total - discount(state.total)}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={() => dispatch({ type: "CHECKOUT" })}>
                پرداخت سفارش
              </Button>
            </Summary>
          </Bottom>
        )}
        {state.checkout && (
          <Checkout>
            <h3> خرید شما با موفقیت انجام شد </h3>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Checkout>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <Clear>
            <img src={empty} style={{ width: "21vw" }} alt="empty-card" />
            <h5>سبد خرید شما خالی است!</h5>
            <p>می‌توانید برای مشاهده محصولات به صفحه زیر بروید:</p>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Clear>
        )}
      </Wrapper>
    </Container>
  );
};

export default ShopCart;
