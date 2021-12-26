import styled from "styled-components"
import { primaryColor } from "../Assets/Utility"

export const PrimaryButton = styled.div`
a{
    padding: 15px 25px;
    color: white;
    background-color: black;
}
button{
    padding: 15px 25px;
    color: white;
    background-color: black;
    border:none;
    outline:none;
}

`
export const SecondaryButton = styled.div`
	a {
		display: flex;
		flex-direction: column;
		font-size: 22px;
		font-weight: bolder;
		font-family: "poppins";
		width: fit-content;
		.line {
			height: 4px;
			background-color: ${primaryColor};
			width: 60%;
			margin-top: 3px;
		}
	}
	button {
		display: flex;
		flex-direction: column;
		font-size: 22px;
		font-weight: bolder;
		font-family: "poppins";
		width: fit-content;
        background-color: transparent;
        border:none;
        outline:none;
		cursor:pointer;
		.line {
			height: 4px;
			background-color: ${primaryColor};
			width: 60%;
			margin-top: 3px;
		}
	}
`;

