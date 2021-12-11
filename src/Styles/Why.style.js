import styled from "styled-components";

export const WhySection = styled.section`
padding: 50px 0;
display: flex;
justify-content: center;
`
export const WhyWrapper = styled.div`
display: flex;
position: relative;
width: 95%;
padding: 40px;
background-color: #E9F7F2;
@media (max-width:600px){
    flex-direction: column;
    padding: 20px;
}
.why-container{
    width: 50%;
    @media (max-width:600px){
        width: 100%;
    }
    .why-content{
        width: 70%;
        @media (max-width:600px){
            width: 100%;
            margin: 20px 0;
        }
        .why-heading{
            font-size: 35px;
        }
        .why-text{
            font-size: 22px;
            margin: 10px 0;
            color: #313131;
        @media (max-width:600px){
            font-size: 18px;
        }
        }
    }
    .why-card-wrapper{
        display: flex;
        @media (max-width:600px){
            flex-direction: column;
        }
        .why-card{
            padding: 100px 30px;
            padding-top: 40px;
            border-radius: 30px;
            height: fit-content;
            background-color: #D4EDE2;
            img{
                width: 20%;
            }
            h1{
                color: black;
                font-size:24px;
            }
            p{
                font-size: 18px;
                width:90%;
                margin: 10px 0;
            }
            ul{
                list-style: none;
                li{
                    display: flex;
                    align-items: center;
                    color: #03B952;
                    font-weight: bold;
                    img{
                        width: 35px;
                        margin-right: 10px;
                    }
                }
            }
        }
        .why-card:nth-child(2){
            margin-left:20px;
            margin-top: 145px;
            background-color: #EDECD4;
        @media (max-width:600px){
            margin-top: 20px;
            margin-left: 0rem;
        }
            .arrow-item{
                color: #B9B203;
            }
        }
    }

}
.star{
    position: absolute;
    width: 140px;
    left: 800px;
    top: 100px;
    @media (max-width:600px){
        display: none;
    }
}
`
