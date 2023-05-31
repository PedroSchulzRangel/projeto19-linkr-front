import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SigIn() {

    const [form, setForm] = useState({ email: "", password: "" })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendForm(e) {
        e.preventDefault()
        axios.post(``, form)
            .then(answer =>console.log("ok"))
            .catch((err) => {
                alert(err.response.data.message)
                setForm({ email: "", password: "" })
            })
    }

    return (
        <MainContainer>
            <Title>
                <div>
                    <h1>linkr</h1>
                    <h2>save, share and discover
                        the best links on the web</h2>
                </div>
            </Title>

            <Form>
                <input placeholder="e-mail" type={"email"}
                    name={"email"} value={form.email}
                    onChange={handleForm}>
                </input>
                <input placeholder="password" type={"password"}
                    name={"password"} value={form.password}
                    onChange={handleForm}>
                </input>

                <button onClick={sendForm}>Log In</button>
                <Link>
                    <RouteToSignUp>
                        First time? Create an account!
                    </RouteToSignUp>
                </Link>
            </Form>
        </MainContainer>
    )
}
const MainContainer = styled.div`
display: flex`

const Title = styled.div`
width:60% ;
height:650px;
background-color:#151515;
color: #FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
div{
    width:422px;
}
h1{
  font-family: 'Passion One', cursive;
  font-size:106px;
}
h2{
  font-family: 'Oswald', sans-serif;
  font-size:43px;
}
`
const Form = styled.form`
background-color: #333333;
width:40%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
input{
   height: 65px;
   width: 429px;
   border-radius: 6px;
   margin-bottom: 13px;
}
button{
    width: 429px;
    height: 65px;
    font-family: 'Oswald';
    background: #1877F2;
    border-radius: 6px;
    border: transparent;
    color: #FFFFFF;
    font-size: 27px;
    font-family: 'Oswald';
    margin-bottom:22px;
}

`

const RouteToSignUp = styled.a`
font-family: 'Lato';
color:#FFFFFF;
text-decoration: underline #FFFFFF;
`

