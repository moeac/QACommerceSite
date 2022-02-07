import styled from "styled-components";
import { mobile } from "../responsive";

const Image = styled.img`
    opacity: 1;
    transition: all 0.5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: -2px 3px 5px gray;
    ${mobile({ height: "25vh", margin: "0px 0px -7px 0px" })};
`;

const Container = styled.div`
    flex: 1;
    margin: 0px 10px;
    height: 60vh;
    position: relative;
    background-color: black;;
    border-radius: 8px;
    &:hover ${Image}{
        opacity: 0.5;
    }
    ${mobile({ margin: "10px 0px" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
    font-weight: 100;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    box-shadow: -2px 2px 3px #ff9216;
    padding: 10px;
    background-color: white;
    color: #ff9216;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
};

export default CategoryItem;

