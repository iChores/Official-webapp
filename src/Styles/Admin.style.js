import styled from "styled-components";

const AdminWrapper = styled.div`
	display: flex;
	flex-direction: column;
    position: relative;
	.admin-container {
		padding: 30px;
		width: 70%;
		border: 1px solid black;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 24px;
        }
	}
`;


export default AdminWrapper;