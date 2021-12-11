import styled from "styled-components";
const NavWrapper = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    .logo{
        width: 12%;
        @media (max-width:600px){
            width: 120px;
        }
    }
    .nav-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (max-width:600px){
            display: none;
        }
        a{
            padding: 10px;
            font-size: 1.4rem;
        }
    }
    .hamburger-button{
        background-color: transparent;
        padding: 10px;
        display: none;
        @media (max-width:600px){
            display: unset;
            img{
                width: 35px;
            }
        }
        border: none;
    }
`
export default NavWrapper;