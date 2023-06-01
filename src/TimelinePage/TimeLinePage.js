import styled from "styled-components";

export default function TimeLine() {
    return (
        <MainContainer>
            <Title>
                <h1>timeline</h1>
            </Title>
            <CreatePost>
                <TimelineForm>
                    <img>
                    </img>
                    <h1></h1>
                    <input></input>
                    <input></input>
                </TimelineForm>
            </CreatePost>
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
`