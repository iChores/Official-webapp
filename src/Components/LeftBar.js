import LeftWrapper from "../Styles/LeftBar";
import ScheduleIcon from "../Assets/ScheduleIcon.png";
import ComplainIcon from "../Assets/ComplainIcon.png";
import SubscriptionIcon from "../Assets/SubscriptionIcon.png";
import SettingIcon from "../Assets/SettingIcon.png";

function LeftBar({ activeTab, setActiveTab }) {
	function GetData(e) {
		let val = e.target.getAttribute("data");
		setActiveTab(val);
		console.log(val);
	}
	return (
		<LeftWrapper>
			<h1 className="leftwrapper-heading"> Hello, Emeka</h1>
			<div className="tab-wrapper">
				<div className="tab-container" data="Schedules" onClick={GetData}>
					<div className="img-container">
						<img src={ScheduleIcon} alt="" />
					</div>
					<h2
						style={{
							color: activeTab == "Schedules" ? "#3DEAA3" : "#000",
						}}
					>
						Schedules
					</h2>
				</div>
				<div className="tab-container" data="Complain" onClick={GetData}>
					<div className="img-container">
						<img src={ComplainIcon} alt="" />
					</div>
					<h2
						style={{
							color: activeTab == "Complain" ? "#3DEAA3" : "#000",
						}}
					>
						Complain
					</h2>
				</div>
				<div className="tab-container" data="status" onClick={GetData}>
					<div className="img-container">
						<img src={SubscriptionIcon} alt="" />
					</div>
					<h2
						style={{
							color: activeTab == "status" ? "#3DEAA3" : "#000",
						}}
					>
						status
					</h2>
				</div>
				<div className="tab-container" data="Settings" onClick={GetData}>
					<div className="img-container">
						<img src={SettingIcon} alt="" />
					</div>
					<h2
						style={{
							color: activeTab == "Settings" ? "#3DEAA3" : "#000",
						}}
					>
						Settings
					</h2>
				</div>
			</div>
		</LeftWrapper>
	);
}

export default LeftBar;
