import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

export const RegisterWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
.question{
    margin-top:20px;
    a{
        color: ${primaryColor};
        margin-left: 10px;
    }
}
@media (max-width:600px){
    padding: 15px;
}
.form{
    padding: 50px 0px;
    width: 60%;
    background-color: ${primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    @media (max-width:600px){
        font-weight: bold;
        width: 100%;
        padding: 30px;
    }
    p{
        font-size: 20px;
        color: red;
    }
    .wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        display: block;
        width: 60%;
        padding: 20px;
        border-radius: 40px;
        margin-top: 20px;
        color: black;
        font-size: 18px;
        @media (max-width:600px){
            width: 100%;
        }
        ::placeholder{
            color: black;
            font-weight: bold;
            font-size: 18px;
        }
    }
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  box-shadow: none;
  background-image: none;
  cursor: pointer;
  display: block;
  width: 60%;
  padding: 20px;
  border-radius: 40px;
  border: 2px solid black;
  margin-top: 20px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  @media (max-width:600px){
      width: 100%;
      font-size: 16px;
  }
}
}
.form-button{
    padding: 20px 50px;
    background-color: black;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
}
.back{
    border: none;
    color: black;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
    cursor: pointer;
    background-color: transparent;
}
`

