import styled from "styled-components";

const CookingFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.form-wrapper {
		.err {
			color: red;
			font-size: 16px;
			margin-top:30px;
			align-self:center;
		}
		padding: 45px;
		box-shadow: 0 0 30px #dbdbdb;
		display: flex;
		flex-direction: column;
		color: black;
		h3 {
			font-size: 18px;
		}
		.size {
			margin-top: 30px;
			margin-bottom: 10px;
		}
		.service-prefernce-heading {
			margin: 10px 0;
		}
		.number {
			padding: 10px 30px;
			border: 2px solid black;
			border-radius: 30px;
			font-weight: bold;
			color: black;
			::placeholder {
				font-weight: bold;
				color: black;
			}
		}
		.header {
			align-self: center;
			display: flex;
			align-items: center;
			position: relative;
			img {
				width: 50px;
			}
			h2 {
				font-size: 22px;
				margin-left: 30x;
			}
			button {
				background-color: transparent;
				border: none;
				position: absolute;
				outline: none;
				right: 320px;
				cursor: pointer;
				h4 {
					margin-top: -10px;
				}
				img {
					transform: rotate(180deg);
					width: 35px;
				}
			}
		}
		.prefernce-container {
			display: flex;
			align-items: center;
			position: relative;
			margin-top: 5px;
			input {
				width: 20px;
				height: 20px;
			}
			h4 {
				margin-left: 10px;
			}
		}
		.service-day-heading {
			margin: 5px 0;
		}
		.service-day-wrapper {
			display: flex;
			align-items: center;
			margin-top: 10px;
			.pick-day {
				margin-top: -10px;
			}
			.container {
				margin-left: 30px;
				select {
					padding: 5px;
					font-weight: bold;
				}
				:nth-child(1) {
					margin-left: 0;
				}
			}
			button {
				width: fit-content;
				height: fit-content;
				margin-left: 20px;
				padding: 5px 10px;
				border: none;
				color: white;
				background-color: black;
			}
		}
		.button-container {
			display: flex;
			flex-direction: column-reverse;
			margin-top: 20px;
			justify-content: space-between;
			.continue {
				cursor: pointer;
			}
			.price-container {
				display: flex;
				align-items: center;
				button {
					padding: 10px;
					font-size: 12px;
					font-weight: bold;
					border: none;
					outline: none;
					height: fit-content;
					background-color: black;
					color: white;
				}
				h4 {
					padding: 10px;
					background-color: #f2f2f2;
					margin-left: 10px;
					b {
						color: green;
						background-color: white;
					}
				}
			}
		}
		.start-date-wrapper {
			margin: 10px 0;
		}
	}
`;
export default CookingFormWrapper;
