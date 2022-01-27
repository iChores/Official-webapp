import styled from "styled-components";


const ScheduleWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	.container {
		width: 30%;
		padding: 30px 0;
		:nth-child(1) {
			background: #f2f1f1;
			width: 20%;
		}
		:nth-child(2) {
			width: 40%;
			border: 1px solid black;
		}
	}
`;

export default ScheduleWrapper;