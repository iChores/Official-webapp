import { useState } from "react";
import Complain from "../Components/Complain";
import HouseKeeperDetails from "../Components/HouseKeeperDetails";
import LeftBar from "../Components/LeftBar";
import Responsibilities from "../Components/Responsibilities";
import Setting from "../Components/Settings";
import Status from "../Components/Status";
import ScheduleWrapper from "../Styles/ScheduleList.style";

function ScheduleList() {
	const [activeTab, setActiveTab] = useState("Schedules");
	return (
		<ScheduleWrapper>
			<div className="container">
				<LeftBar activeTab={activeTab} setActiveTab={setActiveTab} />
			</div>
			<div className="container">
				{activeTab === "Schedules" && <Responsibilities />}
				{activeTab === "Complain" && <Complain />}
				{activeTab === "status" && <Status/>}
				{activeTab === "Settings" && <Setting />}
			</div>
			<div className="container">
				<HouseKeeperDetails
					name="Anabella okonkwo"
					serviceType="Home cleaning"
				/>
			</div>
		</ScheduleWrapper>
	);
}

export default ScheduleList;
