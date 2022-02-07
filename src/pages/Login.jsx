import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
     ),
     url("https://www.tiles-direct.com/blog/wp-content/uploads/2021/09/tile-colour-grey-wall-and-floor-tiles-700x700.jpg") center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid #ff9216;
    border-radius: 5px;
    color: #ff9216;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 10px;
    text-decoration: underline;
    cursor: pointer;
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


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <Link>FORGOT YOUR PASSWORD? TOUGH ITS GONE FOREVER SON</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Login;
