import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${mobile({ padding: "5px 0px", flexDirection: "column" })};
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item=> (
                <CategoryItem item = {item} key = {item.id}/>
            ))}
        </Container>
    )
};

export default Categories;
