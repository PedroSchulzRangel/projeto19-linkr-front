import styled from "styled-components";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext"
import axios from "axios"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth, login } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState(auth)
    const navigate = useNavigate()
    const refOne = useRef(null)
    const refTwo = useRef(null)
    if (isMenuOpen) {
        handleClick()
    }
    function Logout() {
        const newAuth = { undefined }
        login(newAuth)
        const form={token:userInfo.token}
        axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-session`,form)
        .then((res)=>{
            setTimeout(navigate("/"), 100)
        })
        .catch((error)=>{
            alert(error.response.data);
        })

        
    }

    function handleClick() {
        const handleClick = (e) => {
            if (refOne.current.contains(e.target)) {

            }
            else if (refTwo.current.contains(e.target)) {
                setTimeout(Logout, 100)
            }
            else {
                setIsMenuOpen(!isMenuOpen)
            }
        }
        document.addEventListener("click", handleClick)
    }



    return (
        <Content>
            <header>
                <div className="title">linkr</div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} ref={refOne} className="user-items" >
                    <img className={isMenuOpen ? "menu-icon-open" : "menu-icon"} src="https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png" alt="show menu" />
                    <img data-test="avatar" className="user-icon" src={userInfo ? `${userInfo.pictureUrl}`:"https://cdn-icons-png.flaticon.com/512/552/552721.png"} alt={userInfo ? `${userInfo.username}`:"anon"} />
                </div>
            </header>
            <div  data-test="menu" ref={refTwo} className={isMenuOpen ? "logout-items-open" : ""}>
                <div data-test="logout">Logout</div>
            </div>
        </Content>
    );
}



const Content = styled.div`

header{
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    height: 8vh;
    width: 100vw;
    background-color: #151515;
}
.title{
    display: flex;
    align-items: center;
    color: white;
    margin-left:10px ;
    font-family: 'Passion One', cursive;
    font-weight: 700;
    font-size: 4vh;
}
.user-items{
    height: 8vh;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.menu-icon{
    height: 45%;
    margin-right: 8px;
    filter:contrast(300%);
}
.menu-icon-open{
    height: 45%;
    margin-right: 8px;
    filter:contrast(300%);
    transform: rotate(180deg);
}
.user-icon{
    height: 50%;    
    border-radius: 65%;    
}
.logout-items-open{
    position: fixed;
    top:8vh;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4vh;
    width: 100px;
    background-color: #151515;
    color: white;
    border-bottom-left-radius: 10px;
    font-family: 'Passion One', cursive;
    font-size: 400;
    font-size: 80%;
}
`

