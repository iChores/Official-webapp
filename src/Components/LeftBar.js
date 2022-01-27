import LeftWrapper from "../Styles/LeftBar";
import ScheduleIcon from "../Assets/ScheduleIcon.png";
import ComplainIcon from "../Assets/ComplainIcon.png";
import SubscriptionIcon from "../Assets/SubscriptionIcon.png";
import SettingIcon from "../Assets/SettingIcon.png";

function LeftBar() {
	return (
		<LeftWrapper>
			<h1 className="leftwrapper-heading"> Hello, Emeka</h1>
			<div className="tab-wrapper">
				<div className="tab-container">
					<div className="img-container">
						<img src={ScheduleIcon} alt="" />
					</div>
					<h2>Schedules</h2>
				</div>
				<div className="tab-container">
					<div className="img-container">
						<img src={ComplainIcon} alt="" />
					</div>
					<h2>Complain</h2>
				</div>
				<div className="tab-container">
					<div className="img-container">
						<img src={SubscriptionIcon} alt="" />
					</div>
					<h2> status</h2>
				</div>
				<div className="tab-container">
					<div className="img-container">
						<img src={SettingIcon} alt="" />
					</div>
					<h2>Settings</h2>
				</div>
			</div>
		</LeftWrapper>
	);
}

export default LeftBar;
