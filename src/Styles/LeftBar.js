import styled from "styled-components";

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.leftwrapper-heading {
		font-size: 28px;
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
				img {
					width: 35px;
				}
			}
			h2 {
				/* margin-left: 10px; */
				font-size: 20px;
                width: 50%;
			}
		}
	}
`;


export default LeftWrapper;