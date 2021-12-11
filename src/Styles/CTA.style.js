import styled from "styled-components";
import{primaryColor} from "../Assets/Utility"


const CtaWrapper = styled.div`
display: flex;
flex-direction: row;
    @media (max-width:600px){
        flex-direction: column;
    }

.cta-container{
    width: 50%;
    padding: 20px;
        @media (max-width:600px){
            width: 100%;
        }
    .cta-img{
        width: 80%;
        @media (max-width:600px){
            width: 100%;
        }
    }
    .cta-content{
        width: 90%;
        margin-top: 100px;
        @media (max-width:600px){
            width: 100%;
            margin-top: 10%;
        }
        .cta-heading{
            font-size: 50px;
            font-weight: 800;
            color: black;
            @media (max-width:600px){
                font-size: 40px;
            }
            @media (max-width:360px){
                font-size: 32px;
            }
            span{
                color: ${primaryColor};
            }
        }
        .cta-text{
            font-size: 24px;
            color: #383838;
            width: 70%;
            margin: 20px 0;
        @media (max-width:600px){
            width: 90%;
        }
        @media (max-width:360px){
            font-size: 20px;
        }
        }
    }
}
`

export default CtaWrapper;