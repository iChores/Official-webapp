import styled from "styled-components";

const StatusWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	h3 {
		align-self: center;
	}
	.sub-content {
        margin-top: 20px;
		h6 {
			font-size: 16px;
		}
		p {
			color: #03b952;
            font-weight: bold;
            padding: 10px 20px;
			background: #f2f2f2;
            margin-top: 10px;
		}
	}
`;



export default StatusWrapper;