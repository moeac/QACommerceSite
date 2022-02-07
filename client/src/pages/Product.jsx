import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Suppliers from '../components/Suppliers';
import { mobile } from '../responsive';
import rlamastik from "../images/rlamastik.jpg";

const Container = styled.div`
    background-color: #ff9216;
    color: #ff9216;
    padding: 10px;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: -3px 2px 5px gray;
    ${mobile({ padding: "1px", flexDirection: "column" })};
`;

const ImageContainer = styled.div`
    flex: 1;
    ${mobile({ margin: "20px 20px 0px 20px", padding: "5px 5px 0px 5px" })};
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border: 1px solid #ff9216;
    border-radius: 8px;
    box-shadow: -1px 2px 5px gray;
    ${mobile({ height: "40vh"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px 20px" })};
`;

const Title = styled.h1`
    font-weight: 200;
    ${mobile({ fontSize: "24px" })};
`;

const SubTitle = styled.h2`
    font-weight: 200;
    ${mobile({ fontSize: "14px" })};
`;

const Description = styled.p`
    margin: 20px 0px;
    ${mobile({ fontSize: "12px" })};
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 75%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%", margin: "10px 0px" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 200;
    ${mobile({ fontSize: "12px" })};
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #ff9216;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ff9216;
    border-radius: 8px;
    box-shadow: -3px 4px 5px gray;
    color: #ff9216;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 200;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #ff9216;
    box-shadow: -3px 4px 5px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid #ff9216;
    background-color: white;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 500;
    color: #ff9216;
    box-shadow: -3px 4px 5px gray;
    
    &:hover {
        background-color: #f1f0ee;
    };
    ${mobile({ marginBottom: "10px" })};
`;


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                <Image src={rlamastik} />
                </ImageContainer>
                <InfoContainer>
                    <Title>RLA MASTIK</Title>
                    <SubTitle>C2S1</SubTitle>
                    <Description>GOOD GLUE TO STICK STUFF TO STUFFGOOD GLUE TO STICK STUFF TO STUFFGOOD GLUE TO STICK STUFF TO STUFFGOOD GLUE TO STICK STUFF TO STUFFGOOD GLUE TO STICK STUFF TO STUFFGOOD GLUE TO STICK STUFF TO STUFF</Description>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                                <FilterText>Colour</FilterText>
                                <FilterColor color="white"/>
                                <FilterColor color="black"/>
                                <FilterColor color="black"/>
                        </Filter>
                        <Filter>
                                <FilterText>Size</FilterText>
                                <FilterSize>
                                    <FilterSizeOption>1.5kg</FilterSizeOption>
                                    <FilterSizeOption>5kg</FilterSizeOption>
                                    <FilterSizeOption>20kg</FilterSizeOption>
                                </FilterSize>
                        </Filter>       
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Suppliers />
            <Footer />
        </Container>
    )
};

export default Product;
