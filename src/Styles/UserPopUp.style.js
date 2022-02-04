import styled from "styled-components";

const UserPopUpWrapper = styled.div`
	padding: 30px 20px;
	width: 45%;
	align-self: center;
	background: white;
	border: 2px solid black;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	margin-top: 15%;
	display: flex;
	flex-direction: column;
	h1 {
		align-self: center;
		font-size: 26px;
		font-weight: bold;
        color: black;
        margin-bottom: 20px;
	}
    .avatar{
        width:100px;
        height:100px;
        border: 2px solid black;
    }
    button{
        margin-top: 20px;
    }
	.input-container {
		h3 {
			margin: 10px 0;
		}
		input {
			width: 90%;
			padding: 10px 20px;
			border: 2px solid black;
			::placeholder {
				font-size: 16px;
				font-weight: bold;
                color: black;
			}
		}
		.status-toggle {
			width: 100px;
			height: 30px;
			border: 2px solid black;
			border-radius: 30px;
            cursor: pointer;
			.toggle-bar {
				height: 100%;
				width: 50%;
				background: #03b952;
				border-radius: 30px;
			}
		}
	}
`;


export default UserPopUpWrapper;
