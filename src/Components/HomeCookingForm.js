import { PrimaryButton } from "../Styles/Buttons.style";
import CookingFormWrapper from "../Styles/HomeCookingForm.style";
import Pan from "../Assets/Pan.png";
function HomeCookingForm() {
	return (
		<CookingFormWrapper>
			<div className="form-wrapper">
				<div className="header">
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
				<div className="service-day-wrapper">
					<div className="container">
						<h4>Day</h4>
						<select name="" id="">
							<option value="Monday">Moday</option>
							<option value="Tuesday">Tuesday</option>
							<option value="Wedsday">Wedsday</option>
							<option value="Thursday">Thursday</option>
							<option value="Friday">Friday</option>
							<option value="Saturday">Saturday</option>
						</select>
					</div>
					<div className="container">
						<h4>Time</h4>
						<input type="time" name="Time" />
					</div>
					<button>Add schedule</button>
				</div>
				<PrimaryButton>
					<button className="continue">Continue</button>
				</PrimaryButton>
			</div>
		</CookingFormWrapper>
	);
}

export default HomeCookingForm;
