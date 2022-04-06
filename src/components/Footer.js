//material ui
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

//styled-components
import styled from "styled-components";

//responsive
import { mobile } from "../responsive";

//Link
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  direction: rtl;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  a {
    text-decoration: none;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AMIN.</Logo>
        <Desc>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>لینک صفحات</Title>
        <List>
          <ListItem>
            <Link to="/login">ورود</Link>
          </ListItem>
          <ListItem>
            <Link to="/register">ثبت نام</Link>
          </ListItem>
          <ListItem>
            <Link to="/">صفحه اصلی</Link>
          </ListItem>
          <ListItem>
            <Link to="/shopCart">سبد خرید</Link>
          </ListItem>
          <ListItem>
            <Link to="/summer">تابستانی</Link>
          </ListItem>
          <ListItem>
            <Link to="/autumn">پاییزی</Link>
          </ListItem>
          <ListItem>
            <Link to="/t-shirt">تی شرت</Link>
          </ListItem>
          <ListItem>
            <Link to="/shirt">پیراهن</Link>
          </ListItem>
          <ListItem>
            <Link to="/nightwear">لباس خواب</Link>
          </ListItem>
          <ListItem>
            <Link to="/allProducts">همه محصولات</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>ارتباط با من</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Iran ,Karaj , Dehghan villa
          St
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +98 918 9250554
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          aminqanbarii1992@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
