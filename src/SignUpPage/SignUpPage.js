import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage(){

const [form, setForm] = useState({email: "", password: "", username: "", pictureUrl: ""});
const [disabled, setDisabled] = useState(false);
const navigate = useNavigate();

function handleForm(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

function SubmitUserRegistry(e){
    
    e.preventDefault();

    if(!form.email || !form.password || !form.username || !form.pictureUrl){
        
        alert("Preencha todos os campos para poder prosseguir com o cadastro");
        return;
    }

    setDisabled(true);

    axios.post(`${process.env.REACT_APP_BASE_URL}/sign-up`,form)
    .then((res) =>{
        console.log(res.data);
        setDisabled(false);
        navigate("/");
    })
    .catch((error) => {
        alert(error.response.data);
        setDisabled(false);
    });
}
    return (
    <PageContainer>
       < LeftContainer>
        <h1>Linkr</h1>
        <h2>save, share and discover<br/>
            the best links on the web</h2>
        </LeftContainer>
        <RightContainer>
            <form onSubmit={SubmitUserRegistry}>
                <input
                placeholder="e-mail"
                name="email"
                value={form.email}
                onChange={handleForm}
                type="email"
                disabled={disabled}
                required/><br/>
                <input
                placeholder="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                type="password"
                disabled={disabled}
                required/><br/>
                <input
                placeholder="username"
                name="username"
                value={form.username}
                onChange={handleForm}
                type="text"
                disabled={disabled}
                required/><br/>
                <input
                placeholder="picture url"
                name="pictureUrl"
                value={form.pictureUrl}
                onChange={handleForm}
                type="text"
                disabled={disabled}
                required/><br/>
                <SubmitButton type="submit" disabled={disabled}>Sign Up</SubmitButton>
            </form>
            <Link to="/"><SwitchPage>Switch back to log in</SwitchPage></Link>
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