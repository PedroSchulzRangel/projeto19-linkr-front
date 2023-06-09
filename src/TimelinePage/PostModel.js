import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function PostModel({userId, linkUrl, pictureUrl, name, description, likes}) {

    const [liked, setLiked] = useState(false)

    return (
        <Post>
            <PictureAndLikes>
                <UserImg src={pictureUrl}>
                </UserImg>

                {(liked === false) &&
                    <div>
                        < AiOutlineHeart style={{ color: "#FFFFFF" }} size={"1.5em"}
                            onClick={() => setLiked(!liked)} />
                        <p>{likes} likes</p>
                    </div>}
                {(liked !== false) &&
                    <div>
                        < AiFillHeart style={{ color: "#AC0000" }} size={"1.5em"}
                            onClick={() => setLiked(!liked)} />
                        <p>{likes+1} likes</p>
                    </div>}

            </PictureAndLikes>
            <PostInfos>
                <Link to={`/user/${userId}`} style={{textDecoration:'none', color:"#FFFFFF"}}>
                <h1>username</h1>
                </Link>
                <p>
                    {description}
                </p>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}>
                    <LinkInfos>
                        <div>
                            <h1>link lalala</h1>
                            <p>Hey! I have moved this tutorial to my personal blog. Same content, new location.
                                Sorry about making you click through to another page.</p>
                            <h2>https://medium.com/@pshrmn/a-simple-react-router</h2>
                        </div>
                        <img></img>

                    </LinkInfos>
                </a>
            </PostInfos>
        </Post>
    )
}
const Post = styled.div`
background: #171717;
width: 611px;
height: 276px;
margin-top:29px;
border-radius: 16px;
display:flex;
`
const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border:2px solid #FFFFFF;
    border-radius: 26.5px;

    margin-top:17px;
    margin-left:18px;
`
const PictureAndLikes = styled.div`
display: flex;
flex-direction:column;
align-items: center;
div{
    display: flex;
flex-direction:column;
align-items: center;
margin-top:19px;
margin-left:18px;
}
p{
    color: #FFFFFF;
    font-family: 'Lato';
    font-size: 11px;
    margin-top:4px;
}
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
