import styled from "styled-components";

const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.form-container {
		padding: 45px;
		width: 50%;
		box-shadow: 0 0 30px #dbdbdb;
		display: flex;
		flex-direction: column;
		color: black;
		position: relative;
		.header {
			align-self: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 20px 0;
			h1 {
				font-size: 24px;
				margin-top: 20px;
			}
            .err{
                font-weight: bold;
                color: red;
            }
			button {
				background: transparent;
				border: 1px solid black;
				outline: none;
				cursor: pointer;
				position: absolute;
				left: 20px;
				top: 20px;
				padding: 5px;
				img {
					transform: rotate(180deg);
					width: 30px;
				}
			}
		}
		.container {
			display: flex;
			flex-direction: column;
			margin: 10px 0;
			h2 {
				font-size: 18px;
				text-transform: capitalize;
				margin-bottom: 5px;
				margin-left: 15px;
			}
			.input-number {
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
		}
		.service-prefernce {
			display: flex;
			flex-direction: column;
			.service-prefernce-heading {
				font-size: 20px;
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
		}
		.service-plan {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
			h1 {
				font-size: 20px;
			}
			p {
				font-size: 18px;
				color: gray;
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
					padding: 7px 10px;
					border: none;
					color: white;
					font-size: 12px;
					font-weight: bold;
					cursor: pointer;
					background-color: black;
				}
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
	}
`;

export default FormWrapper;
