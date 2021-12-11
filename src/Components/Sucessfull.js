import { Link } from "react-router-dom";
import { PrimaryButton } from "../Styles/Buttons.style";
import SucessWrapper from "../Styles/Sucess.style";

function Sucess() {
	return (
		<SucessWrapper>
			<div className="container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 230 230"
				>
					<g id="check" transform="translate(-1633 -598)">
						<circle
							id="Ellipse_13"
							cx="115"
							cy="115"
							r="115"
							transform="translate(1633 598)"
							fill="#3deaa3"
						/>
						<path
							id="Path_1"
							d="M5343,89.323l38.1,25.831L5450.39,42.73"
							transform="translate(-3648.695 634.058)"
							fill="none"
							stroke="#fff"
							strokeWidth="15"
						/>
					</g>
				</svg>
                <h1>You have registered sucessfully</h1>
                <PrimaryButton>
                    <Link to="/login">Continue to login</Link>
                </PrimaryButton>
			</div>
		</SucessWrapper>
	);
}

export default Sucess;
