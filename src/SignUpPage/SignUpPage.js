import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage(){
    return (
    <div>
       <div>
        <h1>Linkr</h1>
        <h2>save, share and discover
            the best links on the web</h2>
        </div>
        <div>
            <form>
                <input placeholder="e-mail" type="email" required/>
                <input placeholder="password" type="password" required/>
                <input placeholder="username" type="text" required/>
                <input placeholder="picture url" type="text" required/>
                <button type="submit">Sign Up</button>
            </form>
            <Link>Switch back to log in</Link>
        </div> 
    </div>
    )
}

const PageContainer = styled.div`
`
