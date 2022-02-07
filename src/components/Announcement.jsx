import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #ff9216;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 100;
    border: 1px solid #ff9216;
    border-radius: 0px 0px 20px 20px;
    margin: 5px;
`;

const Announcement = () => {
    return (
        <Container>
            UNFORTUNATELY WE ARE STILL OPEN
        </Container>
    );
};

export default Announcement;
