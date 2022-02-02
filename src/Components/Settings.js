import { useState } from "react/cjs/react.development";
import EditDetailsForm from "./EditDetailsForm";
import SettingsItems from "./SettingsItems";

function Setting() {
	const[settingsToggle, setSettingsToggle] = useState("off")
	return (
		<>
			{settingsToggle === "off" && (
				<SettingsItems setSettingsToggle={settingsToggle} />
			)}
			{settingsToggle === "on" && (
				<EditDetailsForm setSettingsToggle={settingsToggle} />
			)}
		</>
	);
}

export default Setting;
