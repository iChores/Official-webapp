import { useState } from "react";
import ChooseService from "../Components/ChooseService";
import HomeCleaningForm from "../Components/HomeCleaningForm";
import HomeCookingForm from "../Components/HomeCookingForm";
import JointForm from "../Components/JointForms";
import SelectHomeKeeper from "../Components/SelectHomekeeper";

function Subscribe({user}) {
	const [homeCooking, setHomeCooking] = useState(false);
	const [homeCleaning, setHomeCleaning] = useState(false);
	const [both, setBoth] = useState(false);
	const [chooseShow, chooseSetShow] = useState(true);
	const [homekeeperShow, setHomekeeperShow] = useState(false);
	const [subscriptionType, setSubscriptionType] = useState("");

	return (
		<>
			<ChooseService
				homeCleaning={homeCleaning}
				homeCooking={homeCooking}
				setHomeCleaning={setHomeCleaning}
				setHomeCooking={setHomeCooking}
				setBoth={setBoth}
				both={both}
				user={user}
				chooseShow={chooseShow}
				chooseSetShow={chooseSetShow}
				subscriptionTyper={subscriptionType}
				setSubscriptionType={setSubscriptionType}
			/>
			{subscriptionType === "home cooking" && (
				<HomeCookingForm
					chooseShow={chooseShow}
					chooseSetShow={chooseSetShow}
					homekeeperShow={homekeeperShow}
					setHomekeeperShow={setHomekeeperShow}
				/>
			)}
			{subscriptionType === "home cleaning" && (
				<HomeCleaningForm
					chooseShow={chooseShow}
					chooseSetShow={chooseSetShow}
					setHomekeeperShow={setHomekeeperShow}
					homekeeperShow={homekeeperShow}
				/>
			)}
			{subscriptionType === "both" && (
				<JointForm
					chooseShow={chooseShow}
					chooseSetShow={chooseSetShow}
					homekeeperShow={homekeeperShow}
				/>
			)}
			<SelectHomeKeeper homekeeperShow={homekeeperShow} />
		</>
	);
}

export default Subscribe;
