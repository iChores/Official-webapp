import styled from "styled-components";

const CreateHomeKeeperWrapper = styled.div`
	display: flex;
	justify-content: center;
	.create-homekeeper-wrapper {
		width: 70%;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		padding: 20px;
		h1 {
			align-self: center;
			font-size: 24px;
		}
        button{
            margin-top:10px;
        }
		.avatar {
			width: 150px;
			height: 150px;
			border-radius: 50%;
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
			border: 2px solid black;
            align-self:center;
            margin-top: 20px;
            img{
                object-fit:cover;
                width: 50%;
            }
		}
		.input-container {
			margin-top: 10px;
			h3 {
				margin-bottom: 5px;
			}
			input {
				width: 80%;
				padding: 10px 20px;
			}
		}
	}
`;


export default CreateHomeKeeperWrapper;