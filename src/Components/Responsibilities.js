import ResponsibilitiesWrapper from "../Styles/Responsibilities.style";
import Responsibility from "./Responsibility";
import ArrowLeftIcon from "../Assets/ArrowLeftIcon.png";

function Responsibilities() {
	return (
		<ResponsibilitiesWrapper>
			<h1 className="main-heading">This week's responsibilities</h1>
			<div className="res-container">
				<Responsibility
					Day="Monday"
					startTime="10:00AM"
					endTime="2:00AM"
					status="Expired"
				/>
				<Responsibility
					Day="wednesday"
					startTime="10:00AM"
					endTime="2:00AM"
					status="Active"
				/>
				<Responsibility
					Day="friday"
					startTime="10:00AM"
					endTime="2:00AM"
					status="Active"
				/>
			</div>
			<div className="button-container">
				<button className="arrow">
					<img src={ArrowLeftIcon} alt="" />
				</button>
				<p>Next</p>
			</div>
		</ResponsibilitiesWrapper>
	);
}

export default Responsibilities;
