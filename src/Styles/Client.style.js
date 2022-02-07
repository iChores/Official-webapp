import styled from "styled-components";

const ClientWrapper = styled.div`
	cursor: pointer;
    margin-top: 10px;
	.front-details {
		display: flex;
		width: 100%;
		align-self: center;
		margin: 10px 0;
		justify-content: space-around;
	}
	display: flex;
	width: 70%;
	flex-direction: column;
	border: 1px solid black;
	align-self: center;
	justify-content: space-around;
	padding: 20px;
	.more-details {
		border-top: 1px solid black;
		.more-content {
			margin: 10px 0;
            .add-wrapper{
                margin-top: 10px;
                h5{
                    margin-bottom:5px;
                }
                input{
                    padding: 3px 5px;
                }
            }
			button {
				padding: 15px;
				margin-top: 5px;
			}
		}
	}
`;

export default ClientWrapper;