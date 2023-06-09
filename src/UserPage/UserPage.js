import PostModel from "../TimelinePage/PostModel";
import Navbar from "../Navbar";
import styled from "styled-components";

export default function UserPage(){
    return (
        <MainContainer>
            <Navbar/>
            <Title>
                <img alt="profile"></img>
                <h1>Juvenal Juvêncio's posts</h1>
            </Title>
            <PostModel/>
        </MainContainer>
    )
}

const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background:#333333;
height: 1024px;
`
const Title = styled.div`
display: flex;
margin-top: 125px;
width: 473px;
margin-bottom: 41px;
h1{
    font-family: 'Oswald';
    font-size: 43px;
    color: #FFFFFF;

}
img{
    width: 50px;
    height: 50px;
    border:2px solid #FFFFFF;
    border-radius: 26.5px;
    margin-right: 16px;
}`