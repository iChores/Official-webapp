import { PrimaryButton } from "../Styles/Buttons.style";
import UserPopUpWrapper from "../Styles/UserPopUp.style";

function UserPopUp({ popUpDetails }) {
	return (
		<UserPopUpWrapper>
			<h1>home keeper details</h1>
			<div className="avatar">
				<img src={popUpDetails[0].Avatar} alt="" />
			</div>
			<div className="input-container">
				<h3>First name</h3>
				<input type="text" placeholder={popUpDetails[0].firstName} />
			</div>
			<div className="input-container">
				<h3>Last name</h3>
				<input type="text" placeholder={popUpDetails[0].lastName} />
			</div>
			<div className="input-container">
				<h3>Service type</h3>
				<input type="text" placeholder={popUpDetails[0].userType} />
			</div>
			<div className="input-container">
				<h3>Location</h3>
				<input type="text" placeholder="Ikorodu" />
			</div>
			<div className="input-container">
				<h3>Status</h3>
				<div className="status-toggle">
					<div className="toggle-bar"></div>
				</div>
			</div>
			<PrimaryButton>
				<button>Edit details</button>
			</PrimaryButton>
		</UserPopUpWrapper>
	);
}


export default UserPopUp;