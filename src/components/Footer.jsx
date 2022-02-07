import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import payphoto from "../images/paymentoptions.png";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
    background-color: #ff9216;
    color: white;
    text-align: center;
    margin: 5px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-weight: 100;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ff9216;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

const Centre = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 20px;
    font-weight: 100;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap; 
`;

const ListItem = styled.li`
    width: 100%;
    margin-bottom: 5px;
    font-size: 14px;
`;

const Right = styled.div`
    flex: 1;    
    padding: 20px;
    ${mobile({ backgroundColor: "#ff9216" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    border-radius: 10px;
`;



const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>QA TRADE</Logo>
                <Description>I NEED A ROOM FULL OF MIRRORS SO I CAN BE SURROUNDED BY WINNERS</Description>
                <SocialContainer>
                    <SocialIcon color="white">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="white">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="white">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Centre>
                <Title>USEFUL LINKS</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Shipping</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Centre>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>Unit 1, 788 Marshall Rd Malaga
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>9248 8269
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>sales@qatrade.com.au
                </ContactItem>
                <Payment src= {payphoto}/>
            </Right>

        </Container>
    )
};

export default Footer;
