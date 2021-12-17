import styled from "styled-components";

const CookingFormWrapper =
	styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.form-wrapper {
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
			img {
				width: 50px;
			}
			h2 {
				font-size: 22px;
				margin-left: 30x;
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
            align-items:center;
            margin-top:10px;
			.container {
				margin-left: 30px;
				:nth-child(1){
                    margin-left:0;
                }
			}
            button{
                width:fit-content;
                height:fit-content;
                margin-top:20px;
                margin-left:20px;
                padding:5px 10px;
                border:none;
                color:white;
                background-color:black;
            }
		}
		.continue {
			margin-top: 20px;
			cursor:pointer;
		}
	}
`;
export default CookingFormWrapper;
