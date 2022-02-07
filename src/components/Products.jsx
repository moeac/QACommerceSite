import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    background-color: #ff9216;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map(item=> (
                <Product item = {item} key ={item.id}/>
            ))}
        </Container>
    )
};

export default Products;