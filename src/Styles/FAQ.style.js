import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";


export const Faq = styled.section`
display: flex;
padding: 50px 30px;
@media (max-width:600px){
    flex-direction: column;
    padding: 20px;
}
.faq-container{
    width: 50%;
    @media (max-width:600px){
        width: 100%;
        margin-top: 30px;
    }
    .faq-content{
        h1{
            font-size: 35px;
        @media (max-width:600px){
            font-size: 22px;
        }
        }
        h3{
            margin: 20px 0;
        @media (max-width:600px){
            font-size: 16px;
        }
        }
        .faq-content-button{
            a{
                background-color: ${primaryColor};
                color: black;
            }
        }
    }
}
`

export const ToggleWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
@media (max-width:600px){
    margin-top: 10px;
}
.toggle-title-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
    @media (max-width:600px){
        font-size: 18px;
        width: 80%;
    }
    }
    svg{
        width: 30px;
        @media (max-width:600px){
            width: 25px;
        }
    }
}
.title-text{
    margin-top: 20px;
}
`