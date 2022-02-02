import { useState } from "react/cjs/react.development";
import EditDetailsForm from "./EditDetailsForm";
import SettingsItems from "./SettingsItems";

function Setting() {
	const[settingsToggle, setSettingsToggle] = useState("off")
	return (
		<>
			{settingsToggle === "off" && (
				<SettingsItems setSettingsToggle={setSettingsToggle} />
			)}
			{settingsToggle === "on" && (
				<EditDetailsForm setSettingsToggle={setSettingsToggle} />
			)}
		</>
	);
}

export default Setting;
