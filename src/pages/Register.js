import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//styled-components
import styled from "styled-components";

//validate
import { validate } from "../components/validate/validate";

//responsive
import { mobile } from "../responsive";

//toast
import { notify } from "../components/validate/toast";

import image from "../images/register.jpg"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${image}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin-top: 5px;
  }
`;

const Input = styled.input`
  max-height: 15px;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signin"));
  }, [data, touched]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You sign in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        lastName: true,
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const touchedHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={submitHandler}>
        
          <Div>
            <Input
             style={{border: errors.name && touched.name ? "1px solid red" : ""}}
              placeholder="name"
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={touchedHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </Div>

          <Div>
          <Input
           style={{border: errors.lastName && touched.lastName ? "1px solid red" : ""}}
            placeholder="last name"
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.lastName && touched.lastName && (
            <span> {errors.lastName} </span>
          )}
          </Div>

          <Div>
          <Input
            style={{border: errors.username && touched.username ? "1px solid red" : ""}}
            placeholder="username"
            type="text"
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
          </Div>
        
          <Div>
          <Input
            style={{border: errors.email && touched.email ? "1px solid red" : ""}}
            placeholder="email"
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
          </Div> 

            <Div>  
          <Input
            style={{border: errors.password && touched.password ? "1px solid red" : ""}}
            placeholder="password"
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
          </Div> 

          <Div>    
          <Input
             style={{border: errors.confirmPassword && touched.confirmPassword ? "1px solid red" : ""}}
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
           </Div> 
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
        <ToastContainer />
      </Wrapper>
    </Container>
  );
};

export default Register;
