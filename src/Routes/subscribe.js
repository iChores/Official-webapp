import { useState } from "react";
import ChooseService from "../Components/ChooseService";
import HomeCleaningForm from "../Components/HomeCleaningForm";
import HomeCookingForm from "../Components/HomeCookingForm";
import JointForm from "../Components/JointForms";

function Subscribe({user}) {
	const [homeCooking, setHomeCooking] = useState(false);
	const [homeCleaning, setHomeCleaning] = useState(false);
	const [both, setBoth] = useState(false);
	const [chooseShow, chooseSetShow] = useState(true);
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
				<HomeCookingForm chooseShow={chooseShow} />
			)}
			{subscriptionType === "home cleaning" && (
				<HomeCleaningForm chooseShow={chooseShow} />
			)}
			{subscriptionType === "both" && (
				<JointForm chooseShow={chooseShow} />
			)}
		</>
	);
}

export default Subscribe;
