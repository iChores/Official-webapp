import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.leftwrapper-heading {
		font-size: 24px;
	}
	.tab-wrapper {
		display: column;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
		width: 100%;
		.tab-container {
			display: flex;
			justify-content: center;
			cursor: pointer;
			margin-top: 20px;
			.img-container {
				width: 20%;
				pointer-events: none;
				img {
					width: 35px;
				}
			}
			h2 {
				/* margin-left: 10px; */
				font-size: 20px;
				width: 50%;
				pointer-events: none;
			}
		}
	}
`;


export default LeftWrapper;