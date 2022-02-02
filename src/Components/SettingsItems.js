import { PrimaryButton } from "../Styles/Buttons.style";
import { SettingItemWrapper } from "../Styles/Settings.style";

function SettingsItems({ setSettingsToggle }) {
	return (
		<SettingItemWrapper>
			<h3>Customer information</h3>
			<div className="sub-content">
				<h6>First name</h6>
				<p>Emeka</p>
			</div>
			<div className="sub-content">
				<h6>Last name</h6>
				<p>Owobi</p>
			</div>
			<div className="sub-content">
				<h6>Phone</h6>
				<p>+23480236790</p>
			</div>
			<div className="sub-content">
				<h6>Email</h6>
				<p>emeka.223@gmail.com</p>
			</div>
			<div className="sub-content">
				<h6>State</h6>
				<p>Lagos</p>
			</div>
			<div className="sub-content">
				<h6>Region</h6>
				<p>Eti-osa Lg</p>
			</div>
			<PrimaryButton>
				<button
					onClick={() => {
						setSettingsToggle("on");
					}}
				>
					Edit details
				</button>
			</PrimaryButton>
		</SettingItemWrapper>
	);
}

export default SettingsItems;
