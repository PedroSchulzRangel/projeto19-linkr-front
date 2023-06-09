import PostModel from "../TimelinePage/PostModel";
import Navbar from "../Navbar";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";

export default function UserPage(){

const [posts, setPosts] = useState([]);
const {id} = useParams();
const { auth, login } = useContext(AuthContext);

const config={
    headers:{Autorization:`Bearer ${auth.token}`}
}

useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`, config)
        .then((response) => {
            console.log(response.data);
            setPosts(response.data);
        })
        .catch((error) => alert(error.response.data));
},[])
    return (
        <MainContainer>
            <Navbar/>
            <Title>
                <img src={posts? posts[0].pictureUrl : ""} alt="profile"></img>
                <h1>{posts ? `${posts[0].username}'s posts` : ""}</h1>
            </Title>
            {(posts.length === 0) && <p>loading...</p>}
            {(posts.length !== 0) && posts.map((p,index) =>
                <PostModel
                key={index}
                pictureUrl={p.pictureUrl}
                name={p.username}
                description={p.description}
                linkUrl={p.linkUrl}
                likes={p.likes}/>)}
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