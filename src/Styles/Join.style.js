import styled from "styled-components"
import { primaryColor } from "../Assets/Utility"


export const JoinWrapper = styled.div`
padding: 170px 50px;
padding-bottom: 0;
display: flex;
justify-content: center;
position: relative;
overflow: hidden;
@media (max-width:600px){
    padding: 30px;
}
.join-img{
    position: absolute;
    width: 70%;
    bottom: 0px;
    left: 450px;
    @media (max-width:600px){
        display: none;
    }
}
.join-container{
    width: 90%;
    padding: 70px;
    border-radius: 30px;
    background-color: ${primaryColor};
        @media (max-width:600px){
            padding: 30px;
            width: 100%;
        }
    .join-content{
        width: 400px;
        @media (max-width:600px){
            width: 90%;
        }
        h1{
            font-size: 35px;
            color: black;
        @media (max-width:600px){
            font-size: 30px;
        }
        @media (max-width:360px){
            font-size: 22px;
        }
        }
        p{
            font-size: 18px;
            color: #161616;
            margin: 20px 0;
        @media (max-width:600px){
            margin-bottom: 30px;
            font-size: 16px;
        }
        }
    }
}
`