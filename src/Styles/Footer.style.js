import styled from "styled-components";

export const FooterWrapper = styled.footer`
display: flex;
flex-direction: column;
padding: 50px;
    @media (max-width:600px){
        padding: 30px 10px;
    }
`
export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
     @media (max-width:600px){
         flex-direction: column;
     }
    .footer-img-container{
        @media (max-width:600px){
            margin-bottom: 20px;
        }
        img{
            width: 150px;
        }
    }
    .link-list{
        @media (max-width:600px){
            display: flex;
            flex-wrap:wrap;
            justify-content: center;
        }
        a{
            font-size: 22px;
            padding: 10px;
            text-transform: initial;
        @media (max-width:600px){
            font-size: 22px;
        }
        @media (max-width:360px){
            font-size: 18px;
        }
            img{
                height: 35px;
            }
        }
    }
    .social-icons{
        margin-top: 20px;
        a{
            padding: 5px;
        }
    }
    .contact-list{
        a{
            font-size: 18px;
        }
    }
`
