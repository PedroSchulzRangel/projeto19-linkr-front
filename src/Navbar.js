import styled from "styled-components";
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext"
import { DebounceInput } from "react-debounce-input";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);    
    const { auth, login } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState(auth)
    const [searchedUserInfo, setSearchedUserInfo] = useState({})
    const [searchValue,setSearchValue]=useState({username:""})
    const navigate = useNavigate()
    const refOne = useRef(null)
    const refTwo = useRef(null)
     const USERS=[{url:"https://cdn-icons-png.flaticon.com/512/552/552721.png",name:"user 1"},
    {url:"https://cdn-icons-png.flaticon.com/512/552/552721.png",name:"user 2"},
    {url:"https://cdn-icons-png.flaticon.com/512/552/552721.png",name:"user 3"},
    {url:"https://cdn-icons-png.flaticon.com/512/552/552721.png",name:"user 4"},
    {url:"https://cdn-icons-png.flaticon.com/512/552/552721.png",name:"user 5"}]
    if (isMenuOpen) {
        handleClick()
    }
  
    function Logout() {
        const newAuth = { undefined }
        login(newAuth)
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        };
        axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-session`,config)
        .then((res)=>{
            setTimeout(navigate("/"), 100)
        })
        .catch((error)=>{
            alert("You need to sign in.");
            setTimeout(navigate("/"), 100)
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

    function HandleForm(e){        
        setSearchValue({[e.target.name]: e.target.value })
        if(e.target.value.length>=3){                
            setIsSearchBarOpen(true)
           
         }
         else{
            setIsSearchBarOpen(false)
         }
    }

    return (
        <Content>
            <header>
                <div className="title">linkr</div>
                <div className="search-box">
                <div className="search-bar">

                < DebounceInput onChange={HandleForm} minLength={3}
                debounceTimeout={300} data-test="search"
                placeholder="Search for people" name="username" 
                value={searchValue.username} />

                {isSearchBarOpen && USERS.map((user)=>
                <div className="searched-user-box" data-test="user-search">
                <img className="searched-user-avatar" src={user.url} alt={user.name}/>
                <div className="searched-user-name">{user.name}</div>
            </div>
                )}                            
                </div>
                </div>
               
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} ref={refOne} className="user-items" >

                    <img className={isMenuOpen ? "menu-icon-open" : "menu-icon"}
                     src="https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png" alt="show menu" />

                    <img data-test="avatar" className="user-icon"
                     src={userInfo.pictureUrl ? `${userInfo.pictureUrl}`:"https://cdn-icons-png.flaticon.com/512/552/552721.png"}
                      alt={userInfo.username ? `${userInfo.username}`:"user"} />
                      
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
    display:flex;
    align-items: center;
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
}.search-box{
    height: 8vh;
    width: 34vw;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    position: relative;
}
.search-bar{
    width: 100%;
    height:fit-content;
    position: absolute;
    top:1.5vh;
    border-radius: 5px;
    background-color: #e7e7e7;
}
input{
    box-sizing: border-box;
    height: 5vh;
    width: 100%;
    border-radius: 5px;    
    padding-left:10px;   
    top:0px;
    left: 0px;
    border: none;
    font-family: 'Lato';
    
}
.searched-user-box{
    display: flex;
    align-items: center;
    width: 100%;
    height: 4vh;
    margin-top:1vh;
    margin-bottom:1vh;    
}
.searched-user-avatar{
    height: 100%;
    border-radius: 50%;
    margin-left: 10px;
}
.searched-user-name{
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-family: 'Lato';
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
    height: 65%;    
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