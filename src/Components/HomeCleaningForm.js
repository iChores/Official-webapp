import { PrimaryButton } from "../Styles/Buttons.style";
import CookingFormWrapper from "../Styles/HomeCookingForm.style";
import Pan from "../Assets/Cleaning.png";
import LeftArrow from "../Assets/LeftArrow.png";
import SetSchedule from "./SetSchedule";
import { useState } from "react";
function HomeCleaningForm({ chooseShow,chooseSetShow}) {
	const [weekOnePrice, setWeekOnePrice] = useState([0]);
	const [weekTwoPrice, setWeekTwoPrice] = useState([0]);
	const [weekThirdPrice, setWeekThirdPrice] = useState([0]);
	const [weekFourthPrice, setWeekFourthPrice] = useState([0]);
	const [total, setTotal] = useState("0.00");
	function calculate() {
		const firstWeek = weekOnePrice.reduce((a, b) => {
			return a + b;
		});
		const secondWeek = weekTwoPrice.reduce((a, b) => {
			return a + b;
		});
		const thirdWeek = weekThirdPrice.reduce((a, b) => {
			return a + b;
		});
		const fourthWeek = weekFourthPrice.reduce((a, b) => {
			return a + b;
		});
		const add = (firstWeek + secondWeek + thirdWeek + fourthWeek)
			.toFixed(2)
			.replace(/\d(?=(\d{3})+\.)/g, "$&,");
		setTotal(add);

		console.log("This is first week price:", firstWeek);
		console.log("This is second week price:", secondWeek);
		console.log("This is third week price:", thirdWeek);
		console.log("This is fourth week price:", fourthWeek);
		console.log("This is total week price:", total);
		console.log("This is total week price converted:", add);
	}
	function goBack() {
		chooseSetShow(true)
	}

	return (
		<CookingFormWrapper
			style={{
				display: chooseShow ? "none" : "flex",
			}}
		>
			<div className="form-wrapper">
				<div className="header">
					<button className="back" onClick={goBack}>
						<img src={LeftArrow} alt="" />
						<h4>Back</h4>
					</button>
					<img src={Pan} alt="" />
					<h2>Home Cleaning</h2>
				</div>
				<h3 className="size">Number of rooms to clean </h3>
				<input type="number" placeholder="Input a number" className="number" />
				<h3 className="service-prefernce-heading"> Service preferences</h3>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Asthmatic</h4>
				</div>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Allergic to citrus </h4>
				</div>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Others</h4>
				</div>
				<h3 className="service-day-heading">Customise service days</h3>
				<p>
					The day and time chosen iterates over the course of the subscription
				</p>
				<SetSchedule
					Prices={weekOnePrice}
					setPrice={setWeekOnePrice}
					Title={"Week one"}
				/>
				<SetSchedule
					Prices={weekTwoPrice}
					setPrice={setWeekTwoPrice}
					Title={"Week Two"}
				/>
				<SetSchedule
					Prices={weekThirdPrice}
					setPrice={setWeekThirdPrice}
					Title={"Week Three"}
				/>
				<SetSchedule
					Prices={weekFourthPrice}
					setPrice={setWeekFourthPrice}
					Title={"Week four"}
				/>
				<div className="button-container">
					<PrimaryButton>
						<button className="continue">Continue</button>
					</PrimaryButton>
					<div className="price-container">
						<button className="price-button" onClick={calculate}>
							Show total price
						</button>
						<h4 className="price">
							{total} <b>Naira </b>
						</h4>
					</div>
				</div>
			</div>
		</CookingFormWrapper>
	);
}

export default HomeCleaningForm;
