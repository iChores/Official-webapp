import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";


const LoginWrapper = styled.div`
padding: 100px;
padding-bottom: 0;
overflow: hidden;
position: relative;
@media (max-width:600px){
    padding: 10px;
    display: flex;
    justify-content: center;
    height: 100vh;
}
img{
    width: 70%;
    position: absolute;
    top: -20px;
    left: 0;
    @media (max-width:600px){
        display: none;
    }
}
.login-container{
    background-color: ${primaryColor};
    padding: 80px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    @media (max-width:600px){
        padding: 40px;
        height: fit-content;
        margin-top: 30%;
    }
    .form{
        display: flex;
        flex-direction: column;
        float: right;
        width: fit-content;
        align-self: flex-end;
        width: 35%;
        @media (max-width:600px){
            width: 100%;
        }
        h1{
            font-size:30px;
            margin-left:10px;
        }
        input{
            padding: 20px;
            border: 2px solid black;
            margin: 10px 0;
            border-radius: 40px;
            ::placeholder{
                font-weight:bold;
                color: black;
                font-size: 18px;
            }
        }
        button{
            width: fit-content;
            color: white;
            background-color: black;
            padding: 10px 40px;
            border: none;
            margin-left: 10px;
            font-weight: bold;
            cursor: pointer;
        }
    }
    h3{
        margin-top: 20px;
        a{
            font-size: 20px;
            :nth-child(2){
                color: white;
                margin-left:20px;
            }
        }
    }
}
`

export default LoginWrapper;