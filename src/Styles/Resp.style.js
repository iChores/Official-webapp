import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

const ResponsibilityWrapper = styled.div`
	display: flex;
	width: 95%;
	border: 1px solid black;
	margin-top: 20px;
	.flex-cont {
		width: 50%;
		padding: 30px;
        .schedule-wrap{
            p{
                margin-top: 5px;
            }
        }
		.status-btn {
			padding: 5px 15px;
			font-weight: bolder;
			margin-left: 100px;
			border: none;
			outline: none;
			background: ${primaryColor};
			background: #f35c7b;
		}
	}
`;

export default ResponsibilityWrapper;