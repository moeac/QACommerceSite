import styled from 'styled-components';
import { mobile } from '../responsive';
import rlalogo from "../images/rlalogo.jpg";
import ardexlogo from "../images/ardex-logo.png";
import batlogo from "../images/batlogo.png";
import maxisil from "../images/maxisil-logo.png";
import mapeilogo from "../images/MAPEI-Logo.png";
import dtalogo from "../images/dtalogo.jpg";
import robertslogo from "../images/robertslogo.png";
import laticretelogo from "../images/laticretelogo.jpg";
import swanlogo from "../images/swanlogo.jpg";
import ctalogo from "../images/ctalogo.jpg";
import davcologo from "../images/davcologo.png";
import crommelinlogo from "../images/crommelinlogo.jpg";
import cdklogo from "../images/cdk_Logo.png";
import westbuildlogo from "../images/westbuildlogo.jpg"; 


const Container = styled.div`
    height: 60vh;
    background-color: white;
    color: #ff9216;
    border-radius: 8px;
    box-shadow: -2px 3px 5px gray;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

const Title = styled.p`
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({ fontSize: "30px" })};
`;

const ImageContainer = styled.div`
    flex: 1;
    margin: 5px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    position: relative;
    border-radius: 10px;
`;

const Image = styled.img`
    height: 150px;
    width: 150px;
    margin: 10px;
    border-radius: 10px;
    object-fit: contain;
    ${mobile({ height: "75px", width: "75px", margin: "3px" })};
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({ display: "none" })}; 
`;


const Suppliers = () => {
    return (
        <Container>
            <Title>Our Suppliers</Title>
            <ImageContainer>
                <Image src={rlalogo}/>    
                <Image src={ardexlogo}/>    
                <Image src={batlogo}/>    
                <Image src={maxisil}/>    
                <Image src={mapeilogo}/>    
                <Image src={dtalogo}/>    
                <Image src={robertslogo}/>   
            </ImageContainer>
            <ImageContainer>
                <Image src={laticretelogo}/>    
                <Image src={swanlogo}/>         
                <Image src={cdklogo}/>       
                <Image src={ctalogo}/>    
                <Image src={davcologo}/>    
                <Image src={crommelinlogo}/>    
                <Image src={westbuildlogo}/>    
            </ImageContainer>
            <Description>We stock most products, however if we don't stock a particular item you're after, we will do our best to source it</Description>
        </Container>
    )
};

export default Suppliers;
