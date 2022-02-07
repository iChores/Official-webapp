import ClientListWrapper from "../Styles/ClientList.style";
import Client from "./Client";

function ClientList() {
    return (
			<ClientListWrapper>
				<div className="client-wrapper">
                <h1>Client list</h1>
                <Client/>
                <Client/>
                <Client/>
                <Client/>
				</div>
			</ClientListWrapper>
		);
}


export default ClientList;