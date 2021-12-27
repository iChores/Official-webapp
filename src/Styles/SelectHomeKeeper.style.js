import styled from "styled-components";

const HomeKeeperWrapper = styled.div`
	display: flex;
	justify-content: center;
	.home-keeper {
		box-shadow: 0 0 20px #cacaca;
		width: 550px;
		padding: 40px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.home-keeper-container {
			display: flex;
			justify-content: space-around;
			width: 100%;
			flex-wrap: wrap;
		}
		.price-container {
			display: flex;
			align-items: center;
            margin-top: 20px;
			h4 {
				margin-left: 20px;
				padding:5px 10px;
				background-color: #ebebeb;
				span {
					color: #3ac98d;
				}
			}
		}
	}
`;

export default HomeKeeperWrapper;
