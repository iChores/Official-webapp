import HomeCleaning from "../Assets/homeCleaning.png";
import HomeCooking from "../Assets/homeCooking.png";
import { PrimaryButton, SecondaryButton } from "../Styles/Buttons.style";
import ServiceWrapper from "../Styles/ChooseService.style";

function ChooseService({
	homeCleaning,
	homeCooking,
	subscriptionTyper,
	setSubscriptionType,
	setBoth,
	setHomeCooking,
	setHomeCleaning,
	chooseShow,
	chooseSetShow,
	user
}) {
	function homecookingHandler() {
		setHomeCleaning(false);
		setHomeCooking(true);
	}
	function homeCleaningHandler() {
		setHomeCooking(false);
		setHomeCleaning(true);
	}
	function bothHandler() {
		setHomeCooking(false);
		setHomeCleaning(false);
		setBoth(true);
		setSubscriptionType("both");
		console.log(subscriptionTyper);
	}
	console.log("logging user from home cooking",user);
	const subscriptionType = (function () {
		if (homeCleaning) {
			return "home cleaning";
		} else if (homeCooking) {
			return "home cooking";
		} else {
			return " none selected";
		}
	})();
	function subscriptionTypeHandler() {
		console.log(subscriptionTyper, " this is sub type:", subscriptionType);
		setSubscriptionType( subscriptionType );
		chooseSetShow(false)
	}
	return (
		<ServiceWrapper
			style={{
				display: chooseShow ? "flex" : "none",
			}}
		>
			<div className="container">
				<h1>{user ? `welcome back, ${user.first_name}` : "hello dear"}</h1>
				<h1>select a type of service</h1>
				<p>Choose what best works for you</p>
				<div className="options-wrapper">
					<div className="option-container">
						<img src={HomeCooking} alt="" />
						<h3>Home cooking</h3>
						<div
							className="option"
							onClick={homecookingHandler}
							style={{ borderColor: homeCooking ? "#3DEAA3" : "#000" }}
						>
							<div
								style={{ backgroundColor: homeCooking ? "#3DEAA3" : "#000" }}
							></div>
						</div>
					</div>
					<div className="option-container">
						<img src={HomeCleaning} alt="" />
						<h3>Home cleaning</h3>
						<div
							className="option"
							onClick={homeCleaningHandler}
							style={{ borderColor: homeCleaning ? "#3DEAA3" : "#000" }}
						>
							<div
								style={{ backgroundColor: homeCleaning ? "#3DEAA3" : "#000" }}
							></div>
						</div>
					</div>
				</div>
				<PrimaryButton onClick={subscriptionTypeHandler}>
					<button href="#">Choose plan</button>
				</PrimaryButton>
				<SecondaryButton onClick={bothHandler} className="every-thing">
					<button>
						I want everything
						<div className="line"></div>
					</button>
				</SecondaryButton>
			</div>
		</ServiceWrapper>
	);
}

export default ChooseService;
