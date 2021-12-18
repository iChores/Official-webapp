import { useState } from "react";
import ChooseService from "../Components/ChooseService";
import HomeCookingForm from "../Components/HomeCookingForm";

function Subscribe({user}) {
	const [homeCooking, setHomeCooking] = useState(false);
	const [homeCleaning, setHomeCleaning] = useState(false);
	const [both, setBoth] = useState(false);
	const [chooseShow, chooseSetShow] = useState(false);
	const [subscriptionData, setSubscriptionData] = useState({
		subscriptionType: "",
		subscriptionDetails: "",
		homeKeeperDetails: "",
	});

	return (
		<>
			<ChooseService
				homeCleaning={homeCleaning}
				homeCooking={homeCooking}
				setHomeCleaning={setHomeCleaning}
				setHomeCooking={setHomeCooking}
				setBoth={setBoth}
				user={user}
				chooseShow={chooseShow}
				chooseSetShow={chooseSetShow}
				subscriptionData={subscriptionData}
				setSubscriptionData={setSubscriptionData}
			/>
			<HomeCookingForm chooseShow={chooseShow}/>

		</>
	);
}

export default Subscribe;
