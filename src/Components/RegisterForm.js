import { RegisterWrapper } from "../Styles/RegisterForm.style";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../Assets/Utility";

function RegisterForm({
	firstName,
	phone,
	setPhone,
	lastName,
	stateName,
	streetName,
	regionName,
	LGA,
	Email,
	Password,
	confirmPassword,
	setConfirmPassword,
	setFirstName,
	setLastName,
	setStateName,
	setStreetName,
	setRegionName,
	setEmail,
	setPassword,
}) {
	const [show, setShow] = useState(true);
	const [errorLog, setErrorLog] = useState([]);

	const continueForm = () => {
		setErrorLog([]);
		const formData = [
			firstName,
			lastName,
			streetName,
			stateName,
			regionName,
			phone,
		];
		const errors = [];
		for (let index = 0; index < formData.length; index++) {
			const element = formData[index];
			console.log(index);
			if (element === "" || element === " ") {
				if (index === 0) {
					errors.push("please input your first name*");
				} else if (index === 1 || element === " ") {
					errors.push("please input your last name*");
				} else if (index === 2 || element === " ") {
					errors.push("please input your streetname*");
				} else if (index === 3 || element === " ") {
					errors.push("please select your state*");
				} else if (index === 4 || element === " ") {
					errors.push("please select region*");
				} else if (index === 5 || element === " ") {
					errors.push("please input phone number*");
				}
			}
		}
		console.log(errors);
		if (errors.length === 0) {
			if (show) {
				setShow(false);
			} else {
				setShow(true);
				console.log("happiness half hour");
			}
		} else {
			setErrorLog([...errors]);
		}
	};
	const finalSubmit = () => {
		setErrorLog([]);
		if (Email === "") {
			setErrorLog([...errorLog, "email feild is empty"]);
		} else if (Password !== confirmPassword) {
			setErrorLog([...errorLog, "passwords doesn't match"]);
		} else if (Password.length < 5) {
			setErrorLog([...errorLog,"password length too short"])
		}else {
			axios({
				method: "post",
				url: baseUrl,
				data: {
					firstName,
					lastName,
					regionName,
					stateName,
					streetName,
					phone,
					Email,
					Password,
				},
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			}).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
			})
		}
	};

	return (
		<RegisterWrapper className="register-form">
			<div className="form">
				<h1 className="form-heading">{show ? "Get started" : "Finish up"}</h1>
				{errorLog.map((item) => {
					console.log(item);
					return <p>{item}</p>;
				})}
				<div className="wrapper" style={{ display: show ? "flex" : "none" }}>
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						name="First name"
						placeholder="First name"
					/>
					<input
						type="text"
						name="Last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last name"
					/>
					<input
						type="tel"
						name="Phone number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Phone number"
					/>
					<select
						name="State"
						id="LGA"
						value={stateName}
						onChange={(e) => setStateName(e.target.value)}
					>
						<option className="options" value="Select state">
							Select state
						</option>
						<option className="options" value="Lagos">
							Lagos
						</option>
						<option className="options" value="Abuja">
							Abuja
						</option>
						<option className="options" value="Enugu">
							Enugu
						</option>
					</select>
					<select
						name="Local government"
						id="LGA"
						value={regionName}
						onChange={(e) => setRegionName(e.target.value)}
					>
						{LGA.map((area) => {
							return (
								<option key={Math.random() * 20} value={area}>
									{area}
								</option>
							);
						})}
					</select>
					<input
						type="text"
						name="Street"
						value={streetName}
						onChange={(e) => setStreetName(e.target.value)}
						placeholder="Street"
					/>
				</div>
				<div className="wrapper" style={{ display: show ? "none" : "flex" }}>
					<input
						type="email"
						value={Email}
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						placeholder="Email"
					/>
					<input
						type="password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						placeholder="Password"
					/>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						name="confirm-password"
						placeholder="Confirm password"
					/>
				</div>
			</div>
			<button
				className="form-button"
				style={{ display: show ? "unset" : "none" }}
				onClick={continueForm}
			>
				Continue
			</button>
			<button
				className="form-button"
				onClick={finalSubmit}
				style={{ display: show ? "none" : "unset" }}
			>
				Submit
			</button>
			<button
				className="back"
				onClick={continueForm}
				style={{ display: show ? "none" : "unset" }}
			>
				Go back
			</button>
			<h3 className="question">
				Already registered?
				<Link to="/login">Login</Link>
			</h3>
		</RegisterWrapper>
	);
}

export default RegisterForm;
