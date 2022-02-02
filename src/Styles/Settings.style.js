import styled from "styled-components";
import StatusWrapper from "./Status.style";

export const SettingItemWrapper = styled(StatusWrapper)`
	background: "red";
	button {
		margin-top: 50px;
	}
`;

export const EditDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	h1 {
		align-self: center;
        font-size: 22px;
	}
    .back{
        width: fit-content;
        background: transparent;
        border: transparent;
        cursor: pointer;
        img{
            transform:rotate(-180deg);
            width: 30px;
        }
    }
	.subheading {
		align-self: center;
		font-size: 20px;
		font-weight: 400;
		color: grey;
	}
	.input-wrapper {
		width: 100%;
		h4 {
			margin: 10px 0;
		}
		input {
			padding: 15px 10px;
			width: 90%;
			::placeholder {
				font-weight: 500;
			}
		}
	}
	button {
		margin-top: 10px;
	}
`;
