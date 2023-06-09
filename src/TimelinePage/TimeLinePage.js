import styled from "styled-components";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import PostModel from "./PostModel";
import axios from "axios";


export default function TimeLine() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/timeline`)
            .then((answer) => {
                setPosts(answer.data)

            }).catch((err) => {
                console.log(err.response.data)
            })
    }, [])

    return (
        <MainContainer>
            <Navbar />
            <Title>
                <h1>timeline</h1>
            </Title>
            <CreatePost>
                <TimelineForm>
                    <img>
                    </img>
                    <h1></h1>
                    <input placeholder=""></input>
                    <input placeholder=""></input>
                    <button> Publish</button>
                </TimelineForm>
            </CreatePost>
            {(posts.length === 0) && <p>loading...</p>}
            {(posts.length !== 0) && posts.map(m => <PostModel key={m.id} userId={m.userId}
            linkUrl={m.linkUrl} />)}
        </MainContainer>
    )
}

const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

background:#333333;

`

const Title = styled.div`
margin-top:150px;
width:611px;
margin-bottom:43px;
h1{
    font-family: 'Oswald';
    font-size: 43px;
    color: #FFFFFF;

}`

const CreatePost = styled.div`
width: 611px;
height: 209px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`

const TimelineForm = styled.form`
input:first-child{
height:30px;
}

button{
    background: #1877F2;
    border-radius: 5px;
    width: 112px;
    height: 31px;
    border: transparent;

    color: #FFFFFF;
    font-family: 'Lato';
    font-size: 14px;
}
`
