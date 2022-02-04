import styled from "styled-components";

const AdminWrapper = styled.div`
	display: flex;
	flex-direction: column;
	.admin-wrapper {
		display: flex;
		padding: 20px;
        justify-content: space-around;
		.admin-container {
			padding: 30px;
			width: 50%;
			border: 1px solid black;
            height: fit-content;
			display: flex;
			flex-direction: column;
			align-items: center;
			h1 {
				font-size: 24px;
			}
		}
	}
`;


export default AdminWrapper;