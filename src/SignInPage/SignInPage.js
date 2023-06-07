import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {

    const navigate = useNavigate()

    const [form, setForm] = useState({ email: "", password: "" })
    const [isDisabled, setIsDisabled] = useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendForm(e) {
        e.preventDefault()
        setIsDisabled(true)
        axios.post(`${process.env.REACT_APP_BASE_URL}/`, form)
            .then(answer => {
                setIsDisabled(false)

                navigate("/timeline")})
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
                    onChange={handleForm}  data-test="email">
                </input>
                <input placeholder="password" type={"password"}
                    name={"password"} value={form.password}
                    onChange={handleForm}  data-test="password">
                </input>

                <button onClick={sendForm} disabled={isDisabled}  data-test="login-btn">Log In</button>
                <Link to={"/sign-up"}>
                    <RouteToSignUp data-test="sign-up-link">
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
div{
    margin-top:301px;
    margin-left:144px;
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

   font-size:27px;
   font-family: 'Oswald';
   padding: 12px 17px ;
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

