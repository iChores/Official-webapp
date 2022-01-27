import styled from "styled-components";

const ResponsibilitiesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	.main-heading {
		font-size: 24px;
	}
	.res-container {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		width: 100%;
	}
	.button-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		cursor: pointer;
		.arrow {
			cursor: pointer;
			padding: 15px 10px;
			border: 1.5px solid black;
			background: transparent;
			img {
				width: 30px;
			}
		}
		p {
			font-weight: bold;
		}
	}
`;

export default ResponsibilitiesWrapper;