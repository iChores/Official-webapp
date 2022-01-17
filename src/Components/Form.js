import FormWrapper from "../Styles/Form.style";
import LeftArrow from "../Assets/LeftArrow.png";
import { useState } from "react";
import SetSchedule from "./SetSchedule";
import { PrimaryButton } from "../Styles/Buttons.style";

function Form({
	chooseShow,
	setTotalPrice,
	setHomekeeperShow,
	homekeeperShow,
	chooseSetShow,
	setDetails,
	subscriptionType,
}) {
    console.log(subscriptionType);
    // schedule
	const [weekOnePrice, setWeekOnePrice] = useState([0]);
	const [weekTwoPrice, setWeekTwoPrice] = useState([0]);
	const [weekThreePrice, setWeekThreePrice] = useState([0]);
    const [weekFourPrice, setWeekFourPrice] = useState([0]);
    //days
	const [weekOneSchedule, setWeekOneSchedule] = useState([]);
	const [weekTwoSchedule, setWeekTwoSchedule] = useState([]);
	const [weekThreeSchedule, setWeekThreeSchedule] = useState([]);
    const [weekFourSchedule, setWeekFourSchedule] = useState([]);



	const [people, setPeople] = useState(0);
	const [rooms, setRooms] = useState(0);
	const [err, setErr] = useState(false);
	const [dateLog, setDateLog] = useState([]);
	const [preference, setPrefernce] = useState([]);
	const [total, setTotal] = useState("0.00");

	// functions

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

	function goBack() {
		chooseSetShow(true);
	}

	function Continue() {
		if (people === 0 || preference.length === 0) {
			setErr("Please complete the form*");
		} else {
			setErr(false);
			const firstWeek = weekOnePrice.reduce((a, b) => {
				return a + b;
			});
			const secondWeek = weekTwoPrice.reduce((a, b) => {
				return a + b;
			});
			const thirdWeek = weekThreePrice.reduce((a, b) => {
				return a + b;
			});
			const fourthWeek = weekFourPrice.reduce((a, b) => {
				return a + b;
			});
			const add = (firstWeek + secondWeek + thirdWeek + fourthWeek)
				.toFixed(2)
				.replace(/\d(?=(\d{3})+\.)/g, "$&,");

			setTotalPrice(add);
			setHomekeeperShow(true);
			setDetails([
				{
                    totalPrice: add,
                    subscriptionType,
                    schedule: {
                        weekOneSchedule,
                        weekTwoSchedule,
                        weekThreeSchedule,
                        weekFourSchedule
                    },
                    people,
                    rooms,
                    preference

				},
			]);
		}
	}

	function Calculate() {
		const firstWeek = weekOnePrice.reduce((a, b) => {
			return a + b;
		});
		const secondWeek = weekTwoPrice.reduce((a, b) => {
			return a + b;
		});
		const thirdWeek = weekThreePrice.reduce((a, b) => {
			return a + b;
		});
		const fourthWeek = weekFourPrice.reduce((a, b) => {
			return a + b;
		});
		const add = (firstWeek + secondWeek + thirdWeek + fourthWeek)
			.toFixed(2)
			.replace(/\d(?=(\d{3})+\.)/g, "$&,");
		setTotal(add);
	}

	return (
		<FormWrapper
			style={{ display: chooseShow || homekeeperShow ? "none" : "flex" }}
		>
			<div className="form-container">
				<div className="header">
					<button onClick={goBack}>
						<img src={LeftArrow} alt="" />
						<h4>Go back</h4>
					</button>
					<h1>Customise your subscription</h1>
					<p className="err">{err ? err : ""}</p>
				</div>

				{subscriptionType === "home cooking" && (
					<div className="Table-size container">
						<h2>number of people to feed</h2>
						<input
							type="number"
							placeholder="input a number"
							className="input-number"
							onChange={(e) => {
								setPeople(e.target.value);
							}}
						/>
					</div>
				)}
				{subscriptionType === "both" && (
					<div className="Table-size container">
						<h2>number of people to feed</h2>
						<input
							type="number"
							placeholder="input a number"
							className="input-number"
							onChange={(e) => {
								setPeople(e.target.value);
							}}
						/>
					</div>
				)}

				{subscriptionType === "home cleaning" && (
					<div className="rooms-number container">
						<h2>number of rooms to clean</h2>
						<input
							type="number"
							placeholder="input a number"
							className="input-number"
							onChange={(e) => {
								setRooms(e.target.value);
							}}
						/>
					</div>
				)}
				{subscriptionType === "both" && (
					<div className="rooms-number container">
						<h2>number of rooms to clean</h2>
						<input
							type="number"
							placeholder="input a number"
							className="input-number"
							onChange={(e) => {
								setRooms(e.target.value);
							}}
						/>
					</div>
				)}

				<div className="service-prefernce">
					<h1 className="service-prefernce-heading">Service prefernce</h1>

					{subscriptionType === "home cooking" && (
						<div className="home-cooking-prefernce">
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Diabetic"
									onChange={HandlePrefernce}
								/>
								<h4>Diabetic</h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Vegetarian"
									onChange={HandlePrefernce}
								/>
								<h4>Vegetarian </h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									name=""
									value="Convalescent"
									onChange={HandlePrefernce}
								/>
								<h4>Convalescent </h4>
							</div>
						</div>
					)}
					{subscriptionType === "both" && (
						<div className="home-cooking-prefernce">
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Diabetic"
									onChange={HandlePrefernce}
								/>
								<h4>Diabetic</h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Vegetarian"
									onChange={HandlePrefernce}
								/>
								<h4>Vegetarian </h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									name=""
									value="Convalescent"
									onChange={HandlePrefernce}
								/>
								<h4>Convalescent </h4>
							</div>
						</div>
					)}

					{subscriptionType === "home cleaning" && (
						<div className="home-cleaning-prefernce">
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Asthmatic"
									onChange={HandlePrefernce}
								/>
								<h4>Asthmatic </h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Allergic to citrus"
									onChange={HandlePrefernce}
								/>
								<h4>Allergic to citrus </h4>
							</div>
						</div>
					)}
					{subscriptionType === "both" && (
						<div className="home-cleaning-prefernce">
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Asthmatic"
									onChange={HandlePrefernce}
								/>
								<h4>Asthmatic </h4>
							</div>
							<div className="prefernce-container">
								<input
									type="checkbox"
									value="Allergic to citrus"
									onChange={HandlePrefernce}
								/>
								<h4>Allergic to citrus </h4>
							</div>
						</div>
					)}
					<div className="prefernce-container">
						<input type="checkbox" value="Others" onChange={HandlePrefernce} />
						<h4>Others </h4>
					</div>
				</div>
				<div className="service-plan">
					<h1 className="service-heading">Customise service days</h1>
					<p>
						The day and time chosen iterates over the course of the subscription
					</p>
					<SetSchedule
						Prices={weekOnePrice}
						setPrice={setWeekOnePrice}
						schedule={weekOneSchedule}
						SetSchedule={setWeekOneSchedule}
						Title={"Week one"}
						unitPrice={1400}
						dateLog={dateLog}
						setDateLog={setDateLog}
					/>
					<SetSchedule
						Prices={weekTwoPrice}
						setPrice={setWeekTwoPrice}
						schedule={weekTwoSchedule}
						SetSchedule={setWeekTwoSchedule}
						Title={"Week Two"}
						unitPrice={1400}
						dateLog={dateLog}
						setDateLog={setDateLog}
					/>
					<SetSchedule
						Prices={weekThreePrice}
						setPrice={setWeekThreePrice}
						schedule={weekThreeSchedule}
						SetSchedule={setWeekThreeSchedule}
						Title={"Week Three"}
						unitPrice={1400}
						dateLog={dateLog}
						setDateLog={setDateLog}
					/>
					<SetSchedule
						Prices={weekFourPrice}
						setPrice={setWeekFourPrice}
						schedule={weekFourSchedule}
						SetSchedule={setWeekFourSchedule}
						Title={"Week four"}
						unitPrice={1400}
						dateLog={dateLog}
						setDateLog={setDateLog}
					/>
				</div>
				<div className="button-container">
					<PrimaryButton>
						<button className="continue" onClick={Continue}>
							Continue
						</button>
					</PrimaryButton>
					<div className="price-container">
						<button className="price-button" onClick={Calculate}>
							Show total price
						</button>
						<h4 className="price">
							{total} <b>Naira </b>
						</h4>
					</div>
				</div>
			</div>
		</FormWrapper>
	);
}

export default Form;
