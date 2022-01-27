import styled from "styled-components";

const HouseKeeperDetailsWrapper = styled.div`
	padding: 20px;
	width: 100%;
    height: fit-content;
    border: 1px solid black;
	display: flex;
	flex-direction: column;
	align-items: center;
	.avatar {
		width: 150px;
		height: 150px;
		overflow: hidden;
		border-radius: 50%;
		background: grey;
		margin-top: 20px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.info-container {
		display: flex;
		flex-direction: column;
		justify-items: center;
		margin-top: 10px;
		width: 100%;
		p {
			padding: 10px 20px;
			background: #f2f1f1;
			border-radius: 5px;
			font-weight: bold;
			color: #05a061;
		}
	}
`;

export default HouseKeeperDetailsWrapper;
