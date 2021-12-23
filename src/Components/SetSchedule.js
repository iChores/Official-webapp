import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as ID } from "uuid";

function SetSchedule({ setPrice, Prices, Title }) {
	const [day, setDay] = useState("");
	const [days, setDays] = useState([]);
	const [errorlog, setErrorLog] = useState([{ err: "", type: true }]);
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [weekOne, setWeekOne] = useState([]);
	const [weekTwo, setWeekTwo] = useState(false);
	let dailySchedule = [];
	let weeklySchedule = [];
	let available = false;

	function addItem() {
		const [list, Price] = GetSchedule(endTime, day, startTime);

		if (list === "Not allowed") {
			setErrorLog([{ err: "Not allowed", type: false }]);
		} else {
			setDays([...days, day]);
			available = checkAvailable();
			if (weekOne.length <= 5 && !available) {
				setErrorLog([{ err: "", type: true }]);
				dailySchedule = [...dailySchedule, list];
				setWeekOne([...weekOne, list]);
				setPrice([...Prices, Price]);
			} else if (weekOne.length <= 5 && available) {
				setErrorLog([{ err: "Day exists before", type: false }]);
			} else {
				console.log("week full");
				setErrorLog([{ err: "You can't add more days to week", type: true }]);
				weeklySchedule.push(dailySchedule);
				setWeekTwo([weekOne]);
			}
		}
	}
	function checkAvailable() {
		if (days.includes(day)) {
			return true;
		} else {
			return false;
		}
	}

	function GetSchedule(endTime, day, startTime) {
		const endTimeNumber = extractTimeToNumber(endTime);
		const CheckDay = checkDay(day);
		const startTimeNumber = 12 - extractTimeToNumber(startTime);
		const StartTime = extractTimeToNumber(startTime);
		console.log(
			"surwe",
			endTimeNumber,
			startTimeNumber,
			StartTime,
			day,
			"pricelist:"
		);

		if (startTimeNumber > 6 && endTimeNumber > StartTime && CheckDay) {
			const Price = Math.ceil((endTimeNumber - StartTime) * 841.15);
			const collection = { day, startTime, endTime, Price };
			return [collection, Price];
		} else if (startTimeNumber > 6 && endTimeNumber === StartTime && CheckDay) {
			setErrorLog([{ err: "Not allowed", type: false }]);
			return "Not allowed";
		} else if (startTimeNumber < 6 && StartTime === endTimeNumber) {
			return "Not allowed";
		} else if (startTimeNumber <= 6 && endTimeNumber > StartTime) {
			const Price = Math.ceil((endTimeNumber - StartTime) * 841.15);
			const collection = { day, startTime, endTime, Price };
			return [collection, Price];
		} else if (startTimeNumber > 6 && CheckDay) {
			const Price = Math.floor(endTimeNumber * 841.15);
			const collection = { day, startTime, endTime, Price };
			return [collection, Price];
		} else if (CheckDay) {
			const Price = Math.floor((startTimeNumber + endTimeNumber) * 841.15);
			const collection = { day, startTime, endTime, Price };
			return [collection, Price];
		} else {
			setErrorLog([{ err: "Not allowed", type: false }]);
			return;
		}
	}

	function extractTimeToNumber(time) {
		if (time.length >= 4) {
			const number = time.slice(0, 2);
			return parseInt(number);
		}
		if (time.length < 4) {
			const number = time.slice(0, 1);
			return parseInt(number);
		}
	}
	function checkDay(day) {
		if (day === " " || day === "Day" || day === "") {
			return false;
		} else {
			return true;
		}
	}

	return (
		<Wrapper>
			<h3 className="error">{Title}</h3>
			{errorlog.map((err) => {
				return (
					<ErrorLog key={ID()} style={{ color: err.type ? "green" : "red" }}>
						{err.err}
					</ErrorLog>
				);
			})}
			<div className="service-day-wrapper">
				<div className="container">
					<select
						name=""
						id=""
						value={day}
						onChange={(e) => setDay(e.target.value)}
					>
						<option value="Day">select day</option>
						<option value="Monday">Moday</option>
						<option value="Tuesday">Tuesday</option>
						<option value="Wedsday">Wedsday</option>
						<option value="Thursday">Thursday</option>
						<option value="Friday">Friday</option>
						<option value="Saturday">Saturday</option>
					</select>
				</div>
				<div className="container">
					<select
						name=""
						id=""
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
					>
						<option value="0">start time</option>
						<option value="6am">6am</option>
						<option value="7am">7am</option>
						<option value="8am">8am</option>
						<option value="9am">9am</option>
						<option value="10am">10am</option>
						<option value="11am">11am</option>
						<option value="12pm">12pm</option>
						<option value="1pm">1pm</option>
						<option value="2pm">2pm</option>
						<option value="3pm">3pm</option>
						<option value="4pm">4pm</option>
						<option value="5pm">5pm</option>
						<option value="6pm">6pm</option>
					</select>
				</div>
				<div className="container">
					<select
						name=""
						id=""
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
					>
						<option value="0">End time</option>
						<option value="7am">7am</option>
						<option value="8am">8am</option>
						<option value="9am">9am</option>
						<option value="10am">10am</option>
						<option value="11am">11am</option>
						<option value="12pm">12pm</option>
						<option value="1pm">1pm</option>
						<option value="2pm">2pm</option>
						<option value="3pm">3pm</option>
						<option value="4pm">4pm</option>
						<option value="5pm">5pm</option>
						<option value="6pm">6pm</option>
					</select>
				</div>
				<button onClick={addItem}>Add schedule</button>
			</div>

			{weekOne.map((item) => {
				const key1 = ID();
				const key2 = ID();
				const key3 = ID();
				const key4 = ID();
				const key5 = ID();
				const key6 = ID();
				const key7 = ID();
				const key8 = ID();
				const key9 = ID();
				return (
					<Item key={key4}>
						{item.day && <h5 key={key1}> Day: {item.day}</h5>}
						{item.startTime && (
							<h5 key={key2}> Start time: {item.startTime}</h5>
						)}
						{item.startTime && <h5 key={key3}> End time {item.endTime}</h5>}
						{item.Price && <h5 key={key5}> {item.Price}</h5>}
						{item.startTime && (
							<button key={key6}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="9.811"
									height="9.811"
									viewBox="0 0 9.811 9.811"
									key={key7}
								>
									<rect
										width="12.406"
										height="1.469"
										transform="translate(1.039) rotate(45)"
										fill="red"
										key={key8}
									/>
									<rect
										width="12.406"
										height="1.469"
										transform="translate(0 8.772) rotate(-45)"
										fill="red"
										key={key9}
									/>
								</svg>
							</button>
						)}
					</Item>
				);
			})}
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin-top:20px;
`
const Item = styled.div`
	display: flex;
	margin-top: 10px;
	h5 {
		padding: 5px 10px;
		background: #f2f2f2;
		margin-left: 10px;
		:nth-child(1) {
			margin-left: 0;
		}
	}
	button {
		background: transparent;
		border: none;
		outline: none;
		padding: 5px;
		cursor: pointer;
	}
`;
const ErrorLog = styled.h5`
	color: red;
`;
export default SetSchedule;
