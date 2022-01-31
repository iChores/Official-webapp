import styled from "styled-components";

const ComplainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	.form-wrapper {
		align-self: flex-start;
		width: 100%;
		margin-top: 20px;
		input {
			width: 100%;
			height: 200px;
			margin: 10px 0;
			background: #f2f2f2;
            border: none;
		}
	}
`;


export default ComplainWrapper;