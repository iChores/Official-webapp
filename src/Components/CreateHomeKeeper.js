import CreateHomeKeeperWrapper from "../Styles/CreateHomeKeeper.style";
import CameraIcon from "../Assets/Camera.png";
import { PrimaryButton } from "../Styles/Buttons.style";
function CreateHomeKeeper() {
	return (
		<CreateHomeKeeperWrapper>
			<div className="create-homekeeper-wrapper">
				<h1>Create homekeeper</h1>
				<div className="avatar">
					<img src={CameraIcon} alt="" />
				</div>
				<div className="input-container">
					<h3>Full name</h3>
					<input type="text" />
				</div>
				<div className="input-container">
					<h3>Type</h3>
					<input type="text" />
				</div>
				<div className="input-container">
					<h3>Region</h3>
					<input type="text" />
				</div>
				<div className="input-container">
					<h3>State</h3>
					<input type="text" />
				</div>
				<PrimaryButton>
					<button>Submit</button>
				</PrimaryButton>
			</div>
		</CreateHomeKeeperWrapper>
	);
}

export default CreateHomeKeeper;
