import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
     ),
     url("https://www.theclintoncourier.net/wp-content/uploads/2020/09/tile-placement.jpg") center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    ${mobile({ width: "75%" })};
    color: #ff9216;
    box-shadow: -3px 4px 5px gray;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 100;
    margin-bottom: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 5px;
    border: 1px solid #ff9216;
    border-radius: 5px;
    color: #ff9216;
`;

const Agreement = styled.span`
    font-size: 10px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 50%;
    border: 1px solid #ff9216;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #ff9216;
    box-shadow: -1px 2px 3px gray;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    ${mobile({ width: "100%" })};
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Agreement>By creating an account, you agree to me calling you when I feel lonely <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Register;
