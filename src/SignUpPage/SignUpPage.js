import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage(){
    return (
    <PageContainer>
       <LeftContainer>
        <h1>Linkr</h1>
        <h2>save, share and discover<br/>
            the best links on the web</h2>
        </LeftContainer>
        <RightContainer>
            <form>
                <input placeholder="e-mail" type="email" required/><br/>
                <input placeholder="password" type="password" required/><br/>
                <input placeholder="username" type="text" required/><br/>
                <input placeholder="picture url" type="text" required/><br/>
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
            <Link><SwitchPage>Switch back to log in</SwitchPage></Link>
        </RightContainer> 
    </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex`

const LeftContainer = styled.div`
    width: 905px;
    height: 1024px;
    background-color: #151515;
    box-shadow: 4px 0px 4px 0px #00000040;
    h1 {
        font-family: 'Passion One', cursive;
        font-size: 106px;
        font-weight: 700;
        line-height: 117px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #FFFFFF;
        margin-left: 144px;
        margin-top: 301px;
    }
    h2 {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        line-height: 63.73px;
        color: #FFFFFF;
        margin-left: 144px;
        margin-top: 2px;
    }
`
const RightContainer = styled.div`
    width: 535px;
    height: 1024px;
    background-color: #333333;
    form {
        margin-top: 274px;
        margin-left: 52px;
    }
    input {
        width: 380px;
        height: 65px;
        border-radius: 6px;
        margin-bottom: 13px;
        ::placeholder, ::-webkit-input-placeholder{
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            font-size: 27px;
            line-height: 40.01px;
            color: #9f9f9f;
            padding-left: 17px;
        }
    }
`
const SubmitButton = styled.button`
    width: 380px;
    height: 65px;
    border-radius: 6px;
    background-color: #1877f2;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 27px;
    line-height: 40.01px;
    color: #FFFFFF;
`
const SwitchPage = styled.p`
    text-align: center;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color:#FFFFFF;
    text-decoration: underline #FFFFFF;
    margin-top: 14px;
`