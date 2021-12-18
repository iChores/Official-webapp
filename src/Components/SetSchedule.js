import { useState } from "react";
import styled from "styled-components";
import { v4 as ID } from "uuid";

function SetSchedule() {
    const [day, setDay] = useState("");
    const [error, setError] = useState([])
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [schedule, setSchedule] = useState([]);

	function addItem() {
		const endTimeNumber = extractTimeToNumber(endTime);
		const CheckDay = checkDay(day);
		const startTimeNumber = 12 - extractTimeToNumber(startTime);
		const StartTime = extractTimeToNumber(startTime);
		console.log(endTimeNumber, startTimeNumber, StartTime);

		if (startTimeNumber > 6 && endTimeNumber > StartTime && CheckDay) {
			const Price = Math.floor((endTimeNumber - StartTime) * 635.38);
			const collection = { day, startTime, endTime, Price };
			setSchedule([...schedule, collection]);
		} else if (startTimeNumber > 6 && endTimeNumber === StartTime && CheckDay) {
			const Price = 635.38;
			const collection = { day, startTime, endTime, Price };
			setSchedule([...schedule, collection]);
		} else if (startTimeNumber > 6 && CheckDay) {
			const Price = Math.floor(endTimeNumber * 635.38);
			const collection = { day, startTime, endTime, Price };
			setSchedule([...schedule, collection]);
		} else if (CheckDay) {
			const Price = Math.floor((startTimeNumber + endTimeNumber) * 635.38);
			const collection = { day, startTime, endTime, Price };
			setSchedule([...schedule, collection]);
		} else {
			return false;
		}
	}

	function checkError() {}

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
		<>
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
			{schedule.map((item) => {
				const key1 = ID();
				const key2 = ID();
				const key3 = ID();
				const key4 = ID();
				return (
					<Item key={key4}>
						<h5 key={key1}> {item.day}</h5>
						<h5 key={key2}> {`Start time: ${item.startTime}`}</h5>
						<h5 key={key3}>{`End time: ${item.endTime}`}</h5>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="9.811"
								height="9.811"
								viewBox="0 0 9.811 9.811"
							>
								<rect
									width="12.406"
									height="1.469"
									transform="translate(1.039) rotate(45)"
									fill="red"
								/>
								<rect
									width="12.406"
									height="1.469"
									transform="translate(0 8.772) rotate(-45)"
									fill="red"
								/>
							</svg>
						</button>
					</Item>
				);
			})}
		</>
	);
}

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
    button{
        background: transparent;
        border: none;
        outline:none;
        padding: 5px;
        cursor: pointer;
    }
`;
export default SetSchedule;
