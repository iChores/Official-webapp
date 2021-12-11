import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";


export const HowWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background-color: #F5F8F9;
padding: 60px 0px;
`


export const HowFeaturesWrapper = styled.div`
display: flex;
justify-content: space-around;
margin-top: 35px;
@media (max-width:600px){
    flex-direction: column;
    align-items: center;
}
.arrow-container{
    @media (max-width:600px){
        margin: 30px 0;
    }
    img{
        width: 60px;
        @media (max-width:600px){
            transform: rotate(90deg);
            width: 40%;
    }
}
}
`

export const HowFeatures = styled.div`
width: 23%;
@media (max-width:600px){
    width: 85%;
}
    .feature-title{
        display: flex;
        align-items: center;
        h2{
            width: 45px;
            height: 45px;
            display: flex;
            justify-content:center;
            align-items: center;
            text-align: center;
            border: 2px solid ${primaryColor};
            border-radius: 50px;
        }
        h1{
            font-size: 20px;
            margin-left: 10px;
        @media (max-width:600px){
            font-size: 18px;
        }
        }
    }
    .feature-subtitle{
        font-size: 18px;
        margin-left: 45px;
    }
`