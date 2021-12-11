import styled from "styled-components";

const ServiceWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 40px;
	@media (max-width: 600px) {
		padding: 20px;
		.every-thing{
			a{
				font-size: 16px;
			}
		}
	}
	a {
		margin: 30px 0;
	}
	.container {
		width: 70%;
		box-shadow: 0 0 30px #b9b9b9;
		padding: 50px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
        @media (max-width:600px){
			width: 100%;
			padding: 20px;
			h1{
				font-size: 20px;
			}
		}
		.options-wrapper {
			display: flex;
			justify-content: space-around;
			width: 60%;
			margin: 50px 0;
        @media (max-width:600px){
			width: 100%;
			img{
				width: 70px;
			}
			h3{
				font-size: 14px;
				margin: 20px 0;
			}
		}
			.option-container {
				display: flex;
				flex-direction: column;
				align-items: center;
				.option {
					border: 2px solid black;
					width: 30px;
					height: 30px;
					border-radius: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					div {
						width: 50%;
						height: 50%;
						background-color: black;
						border-radius: 50%;
					}
				}
			}
		}
	}
`;

export default ServiceWrapper;
