import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
    background-color: #ff9216;
    padding: 10px;
    color: #ff9216;
`;

const Wrapper = styled.div`
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: -1px 2px 5px gray;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 100;
    cursor: pointer;
    border: ${props => props.type === "check" ? "none" : "1px solid #ff9216"};
    background-color: ${props => props.type === "check" ? "#ff9216" : "white"};
    color: ${props => props.type === "check" ? "white" : "#ff9216"};
    border-radius: 8px;
    box-shadow: -1px 2px 5px gray;
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 20px;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    padding: 10px 0px;
`;

const Image = styled.img`
    width: 200px;
    border-radius: 8px;
`;

const Details = styled.div`
    padding: 0px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    margin-bottom: 5px;
    font-weight: 100;
    ${mobile({ fontSize: "16px" })};
`;

const ProductId = styled.span`
    margin-bottom: 5px;
    ${mobile({ fontSize: "12px" })};
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 5px;
    background-color: ${props => props.color};
    ${mobile({ fontSize: "12px" })};
`;

const ProductSize = styled.span`
    flex: 1;
    margin-bottom: 5px;
    ${mobile({ fontSize: "12px" })};
`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "10px 15px" })};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBotom: "10px" })};
`;

const Hr = styled.hr`
    background-color: #ff9216;
    border: none;  
    height: 1px;
    margin: 5px 0px;
`;

const Summary = styled.div`
    flex: 1;
    border: 1px solid #ff9216;
    border-radius: 8px;
    box-shadow: -1px 2px 5px gray;
    margin: 5px 0px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    ${mobile({ fontSize: "28px", textAlign: "center" })};
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" ? "500" : "200"};
    font-size: ${props=>props.type === "total" ? "24px" : "14px"};
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #ff9216;
    color: white;
    border-radius: 8px;
    box-shadow: -1px 2px 5px gray;
    font-size: 16px;
    font-weight: 100;
`;



const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton type="shop">CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>View Cart(2)</TopText>
                        <TopText>Wish List(2)</TopText>
                    </TopTexts>
                    <TopButton type="check">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://s.abcnews.com/images/International/orangutan-babies-animal-rescue-2-nc-mem-180919_hpEmbed_3x2_992.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> RLA MASTIK</ProductName>
                                    <ProductId><b>ID:</b> 24542</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b></ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$20</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://s.abcnews.com/images/International/orangutan-babies-animal-rescue-2-nc-mem-180919_hpEmbed_3x2_992.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> RLA MASTIK</ProductName>
                                    <ProductId><b>ID:</b> 24542</ProductId>
                                    <ProductColor color="#ff9216"/>
                                    <ProductSize><b>Size: M</b></ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$25</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimate Shipping</SummaryItemText>
                            <SummaryItemPrice>$8,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$7,995</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
};

export default Cart;
