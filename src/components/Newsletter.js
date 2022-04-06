//styled-components
import styled from "styled-components"

//responsive
import { mobile } from "../responsive"

//material ui
import { KeyboardArrowUp } from "@material-ui/icons"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    direction: rtl;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    direction: rtl;
    border-radius: 5px;
    ${mobile({width: "80%"})}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-right: 20px;
    outline: none;
    &::placeholder{
        font-size: 18px;
    }
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #00BFD6;
    color: white;
    font-weight: 700;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
`

const A = styled.a`
background-color: #d5d5d5;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
position: absolute;
bottom: 10px;
left: 20px;
transition: all 0.2s ease;


&:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 80px;
    background-color: #cecece;
    color: #fff;
    font-size: 10px;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }

&:hover{
    transform: scale(1.1);
}

`

const Newsletter = () => {

  return (
    <Container>
        <Title>اطلاع از آخرین محصولات :</Title>
        <InputContainer>
        <Input placeholder=" ایمیل خود را وارد کنید"/>
        <Button>
            ارسال
        </Button>
        </InputContainer>
        <A href="#top" data-hover="پرش به بالا"><KeyboardArrowUp/></A>
    </Container>
  )
}

export default Newsletter