import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    border-radius: 8px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    color: #ff9216;
`;

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    border-radius: 8px;
    box-shadow: -2px 3px 5px gray;
    &:hover ${Info}{
        opacity: 1;
    };
    ${mobile({ margin: "10px 0px" })};
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    border-radius: 10px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: white;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
};

export default Product;