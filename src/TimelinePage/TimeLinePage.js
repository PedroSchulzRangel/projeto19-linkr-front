import styled from "styled-components";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TimeLine() {

    useEffect(() => {

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
            <Post>
                <UserImg>
                </UserImg>
                <PostInfos>
                    <h1>Username</h1>
                    <p>
                        description
                    </p>
                    <Link>
                        <LinkInfos>
                            <div>
                                <h1>link lalala</h1>
                                <p>Hey! I have moved this tutorial to my personal blog. Same content, new location.
                                    Sorry about making you click through to another page.</p>
                                <h2>https://medium.com/@pshrmn/a-simple-react-router</h2>
                            </div>
                            <img></img>

                        </LinkInfos>
                    </Link>
                </PostInfos>
            </Post>
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
const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border:2px solid #FFFFFF;
    border-radius: 26.5px;

    margin-top:17px;
    margin-left:18px;
`
const Post = styled.div`
background: #171717;
width: 611px;
height: 276px;
margin-top:29px;
border-radius: 16px;
display:flex;

`
const PostInfos = styled.div`
color: #FFFFFF;
font-family: 'Lato';

margin-left:13px;

h1{
    font-size: 19px;
    margin-top:22px;
}
p{
    margin-top:7px;
    font-size: 17px;
    color: #B7B7B7;
}

`
const LinkInfos = styled.div`
   margin-top:9px;
    width: 503px;
    height: 155px;
    border:1px solid #4D4D4D;
    border-radius: 11px;
    display:flex;
    position:relative;
    text-decoration:underline transparent;
    font-family: 'Lato';
    img{
        width:153.44px;
        height:155px;
        position:absolute;
        right:0px;
        border-radius:0px 11px  11px 0px ;
    }
    div{
        width:302.82px;
        text-decoration:none;
        margin-left:19.31px;
    }
    h1{
        font-size: 16px;
        color: #CECECE;
        text-decoration:none;
    }
    p{
        font-size: 11px;
        color: #9B9595;
        text-decoration:none;
    }
    h2{
        color: #CECECE;
        font-size: 11px;
        margin-top:13px;
    }
`