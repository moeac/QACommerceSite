import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 10vh;
    width: 100%;
    color: #ff9216;
    background-color: white;
    ${mobile({ display: "flex", justifyContent: "center" })};
    box-shadow: -2px 2px 5px gray;
    border-radius: 8px;
`;

const Wrapper = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid #ff9216;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "100%" })};
    color: #ff9216;
`;

const Centre = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ display: "none" })};
`;

const Logo = styled.h1`
    font-weight: 100;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 100;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:"#ff9216"}}/>
                    </SearchContainer>
                </Left>
                <Centre>
                    <Logo>QA TRADE</Logo>
                </Centre>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
};

export default Navbar;
