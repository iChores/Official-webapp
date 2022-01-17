import { useState } from "react";
import ChooseService from "../Components/ChooseService";
import Form from "../Components/Form";
import HomeCleaningForm from "../Components/HomeCleaningForm";
import HomeCookingForm from "../Components/HomeCookingForm";
import JointForm from "../Components/JointForms";
import SelectHomeKeeper from "../Components/SelectHomekeeper";

function Subscribe({user}) {
	const [homeCooking, setHomeCooking] = useState(false);
	const [homeCleaning, setHomeCleaning] = useState(false);
	const [both, setBoth] = useState(false);
	const [chooseShow, chooseSetShow] = useState(true);
	const [totalPrice, setTotalPrice] = useState("0.00")
	const [homekeeperShow, setHomekeeperShow] = useState(false);
	const [subscriptionType, setSubscriptionType] = useState("");
	const [details, setDetails] = useState([])

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
				details={details}
				setDetails={setDetails}
				chooseShow={chooseShow}
				chooseSetShow={chooseSetShow}
				subscriptionTyper={subscriptionType}
				setSubscriptionType={setSubscriptionType}
			/>
			<Form
				chooseShow={chooseShow}
				chooseSetShow={chooseSetShow}
				homekeeperShow={homekeeperShow}
				setHomekeeperShow={setHomekeeperShow}
				setTotalPrice={setTotalPrice}
				subscriptionType={subscriptionType}
				setDetails={setDetails}
			/>
			<SelectHomeKeeper
				homekeeperShow={homekeeperShow}
				totalPrice={totalPrice}
			/>
		</>
	);
}

export default Subscribe;
