import { PrimaryButton } from "../Styles/Buttons.style";
import CookingFormWrapper from "../Styles/HomeCookingForm.style";
import Pan from "../Assets/Both.png";
import SetSchedule from "./SetSchedule";
import LeftArrow from "../Assets/LeftArrow.png";
import { useState } from "react";
function JointForm({
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
	const [people, setPeople] = useState(0);
	const [rooms, setRooms] = useState(0);
	const [err, setErr] = useState(false);
	const [dateLog, setDateLog] = useState([]);
	const [preference, setPrefernce] = useState([]);
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
		if (people === 0 ||rooms===0 || preference.length === 0) {
			setErr("Please complete the form*");
		} else {
			setErr(false);
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
	}

	function HandlePrefernce(e) {
		const checked = e.target.checked;
		const pref = e.target.value;
		if (checked) {
			console.log("cheecked");
			setPrefernce([...preference, pref]);
		} else {
			console.log("not checked");

			const removedElement = preference.filter((ele) => {
				return ele !== pref;
			});
			setPrefernce([...removedElement]);
		}

		console.log(preference);
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
					<h2>Subscribe for both</h2>
				</div>
				<h3 className="err">{err ? err : ""}</h3>
				<h3 className="size">Table size</h3>
				<input
					type="number"
					placeholder="Number of people to feed"
					className="number"
					onChange={(e) => {
						setPeople(e.target.value);
					}}
				/>
				<h3 className="size">Number of rooms to clean</h3>
				<input
					type="number"
					placeholder="Input number"
					className="number"
					onChange={(e) => {
						setRooms(e.target.value);
					}}
				/>
				<h3 className="service-prefernce-heading"> Service preferences</h3>


				<h3 className="service-day-heading">Customise service days</h3>
				<p>
					The day and time chosen iterates over the course of the subscription
				</p>
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

export default JointForm;
