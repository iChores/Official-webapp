import { PrimaryButton } from "../Styles/Buttons.style";
import CookingFormWrapper from "../Styles/HomeCookingForm.style";
import Pan from "../Assets/Pan.png";
import SetSchedule from "./SetSchedule";
import LeftArrow from "../Assets/LeftArrow.png";
import { useState } from "react";
function HomeCookingForm({
	chooseShow,
	setTotalPrice,
	setHomekeeperShow,
	homekeeperShow,
	chooseSetShow,
}) {
	const [weekOnePrice, setWeekOnePrice] = useState([0]);
	const [weekTwoPrice, setWeekTwoPrice] = useState([0]);
	const [weekThirdPrice, setWeekThirdPrice] = useState([0]);
	const [weekFourthPrice, setWeekFourthPrice] = useState([0]);
	const [dateLog, setDateLog] = useState([]);
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
	}
	function goBack() {
		chooseSetShow(true);
	}
	function Continue() {

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

		setTotalPrice(add);
		setHomekeeperShow(true);
	}

	return (
		<CookingFormWrapper
			style={{
				display: chooseShow || homekeeperShow ? "none" : "flex",
			}}
		>
			<div className="form-wrapper">
				<div className="header">
					<button className="back" onClick={goBack}>
						<img src={LeftArrow} alt="" />
						<h4>Back</h4>
					</button>
					<img src={Pan} alt="" />
					<h2>Home cooking</h2>
				</div>
				<h3 className="size">Table size</h3>
				<input
					type="number"
					placeholder="Number of people to feed"
					className="number"
				/>
				<h3 className="service-prefernce-heading"> Service preferences</h3>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Diabetic</h4>
				</div>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Vegetarian </h4>
				</div>
				<div className="prefernce-container">
					<input type="checkbox" name="" />
					<h4>Convalescent </h4>
				</div>
				<h3 className="service-day-heading">Customise service days</h3>
				<p>
					The day and time chosen iterates over the course of the subscription
				</p>
				<div className="start-date-wrapper">
					<h3 className="start-date-heading">Select start date</h3>
					<input type="date" name="Date" id="date" />
				</div>
				<SetSchedule
					Prices={weekOnePrice}
					setPrice={setWeekOnePrice}
					Title={"Week one"}
					unitPrice={1400}
					dateLog={dateLog}
					setDateLog={setDateLog}
				/>
				<SetSchedule
					Prices={weekTwoPrice}
					setPrice={setWeekTwoPrice}
					Title={"Week Two"}
					unitPrice={1400}
					dateLog={dateLog}
					setDateLog={setDateLog}
				/>
				<SetSchedule
					Prices={weekThirdPrice}
					setPrice={setWeekThirdPrice}
					Title={"Week Three"}
					unitPrice={1400}
					dateLog={dateLog}
					setDateLog={setDateLog}
				/>
				<SetSchedule
					Prices={weekFourthPrice}
					setPrice={setWeekFourthPrice}
					Title={"Week four"}
					unitPrice={1400}
					dateLog={dateLog}
					setDateLog={setDateLog}
				/>
				<div className="button-container">
					<PrimaryButton>
						<button className="continue" onClick={Continue}>
							Continue
						</button>
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

export default HomeCookingForm;
