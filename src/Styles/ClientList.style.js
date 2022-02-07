import styled from "styled-components";

const ClientListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	.client-wrapper {
		display: flex;
		flex-direction: column;
		width: 70%;
		border: 1.5px solid black;
        align-self: center;
        padding: 20px 0;
        h1{
            align-self: center;
            font-size: 24px;
        }
	}
`;



export default ClientListWrapper;