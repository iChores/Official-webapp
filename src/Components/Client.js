import { useState } from "react";
import { PrimaryButton } from "../Styles/Buttons.style";
import ClientWrapper from "../Styles/Client.style";

function Client() {
    const [showDetails, setShowDetails] = useState(false);
    const [showKeeperForm, setShowKeeperForm] = useState(false);

	function handleDetails() {
		if (showDetails) {
			setShowDetails(false);
		} else {
			setShowDetails(true);
		}
    }
    function handleHomeKeeperFormDetails() {
        if (showKeeperForm) {
            setShowKeeperForm(false)
        } else {
            setShowKeeperForm(true)
        }
    }
	return (
		<ClientWrapper>
			<div className="front-details" onClick={handleDetails}>
				<h3>Amadasun Oscar</h3>
				<h3>30 jan 2022</h3>
			</div>
			<div
				className="more-details"
				style={{
					display: showDetails ? "unset" : "none",
				}}
			>
				<div className="more-content">
					<h3>Address</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
						rerum!
					</p>
				</div>
				<div className="more-content">
					<h3>State</h3>
					<p>Enugu</p>
				</div>
				<div className="more-content">
					<h3>Subscription Type</h3>
					<p>Home cleaning</p>
				</div>
				<div className="more-content">
					<h3>End date</h3>
					<p>20-4-2022</p>
				</div>
				<div className="more-content">
					<h3> Current homeKeeper</h3>
					<p>Kingsley Argwu</p>
					{showKeeperForm && (
						<div className="add-wrapper">
							<h5>Add housKeeper</h5>
							<input type="text" />
						</div>
					)}
					<PrimaryButton>
						<button onClick={handleHomeKeeperFormDetails}>
							Add HomeKeeper
						</button>
					</PrimaryButton>
				</div>
			</div>
		</ClientWrapper>
	);
}

export default Client;
