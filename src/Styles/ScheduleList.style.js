import styled from "styled-components";


const ScheduleWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	.container {
		width: 30%;
		/* border: 1px solid black; */
		height: 100vh;
		padding: 30px 0;
		:nth-child(1) {
			background: #f2f1f1;
			width: 20%;
		}
	}
`;

export default ScheduleWrapper;