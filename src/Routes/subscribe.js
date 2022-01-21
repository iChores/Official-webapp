import { useState } from "react";
import ChooseService from "../Components/ChooseService";
import Form from "../Components/Form";
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
			{/* work on this component and make responsive */}
			<Form
				chooseShow={chooseShow}
				chooseSetShow={chooseSetShow}
				homekeeperShow={homekeeperShow}
				setHomekeeperShow={setHomekeeperShow}
				setTotalPrice={setTotalPrice}
				subscriptionType={subscriptionType}
				setDetails={setDetails}
			/>
			{/* Component ends here */}
			<SelectHomeKeeper
				homekeeperShow={homekeeperShow}
				totalPrice={totalPrice}
			/>
		</>
	);
}

export default Subscribe;
