import styled from "styled-components";

const SucessWrapper = styled.div`
	display: flex;
	display: none;
	justify-content: center;
	align-items: center;
	height: 80vh;
	.container {
		padding: 100px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 40px #dbdbdb;
		@media (max-width: 600px) {
			padding: 40px;
		}
		svg {
			width: 100px;
		}
		h1 {
			font-size: 20px;
			margin: 20px 0;
			color: black;
    @media (max-width:600px){
		font-size: 16px;
	}
		}
	}
`;

export default SucessWrapper;
