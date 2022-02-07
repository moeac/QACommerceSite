import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Suppliers from '../components/Suppliers';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from "../responsive";

const Container = styled.div`
    background-color: #ff9216;
    padding: 10px;
`;

const Title = styled.h1`
    padding: 10px;
    font-weight: 100;
    color: #ff9216;
    background-color: white;
    border-radius: 6px;
    box-shadow: -1px 2px 5px gray;
    ${mobile({ textAlign: "center" })};
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "10px", display: "flex", flexDirection: "Column" })};
`;

const FilterText = styled.span`
    font-size: 16px;
    font-weight: 100;
    margin-right: 20px;
    color: white;
    ${mobile({ marginRight: "0px", fontSize: "12px" })};
`;

const Select = styled.select`
    padding: 10px;
    width: 25vw;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    color: #ff9216;
    border: none;
    box-shadow: -3px 4px 5px gray;
    border-radius: 10px;
    ${mobile({ margin: "5px 0px", width: "100px", height: "30px", fontSize: "10px", padding: "5px" })};
`;

const Option = styled.option`
`;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>ADHESIVES</Title>
            <FilterContainer>
                <Filter>
                        <FilterText>Sort</FilterText>
                        <Select>
                            <Option selected>Newest</Option>
                            <Option>Price (ASCENDING)</Option>
                            <Option>Price (DESCENDING)</Option>
                        </Select>
                </Filter>      
                <Filter>
                        <FilterText>Filter</FilterText>
                        <Select>
                            <Option disabled selected>Class</Option>
                            <Option>C1 Adhesion</Option>
                            <Option>C2 Adhesion</Option>
                            <Option>S0 Flexibility</Option>
                            <Option>S1 Flexibility</Option>
                            <Option>S2 Flexibility</Option>
                        </Select>
                </Filter>
                <Filter>
                        <FilterText>Filter</FilterText>
                        <Select>
                            <Option disabled selected>Brand</Option>
                            <Option>RLA</Option>
                            <Option>Ardex</Option>
                            <Option>Mapei</Option>
                            <Option>Laticrete</Option>
                            <Option>Davco</Option>
                            <Option>Westbuild</Option>
                        </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Suppliers/>
            <Footer/>
      </Container>
    )
}

export default ProductList;
