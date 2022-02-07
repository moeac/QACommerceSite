import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Suppliers from '../components/Suppliers';
import Products from '../components/Products';
import Slider from '../components/Slider';


const Container = styled.div`
    background-color: #ff9216;
    padding: 10px;
`;

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Slider />
            <Categories />
            <Products />
            <Suppliers />
            <Footer />
        </Container>     
    );
};

export default Home;
