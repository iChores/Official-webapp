import { PrimaryButton } from "../Styles/Buttons.style";
import { EditDetailsWrapper } from "../Styles/Settings.style";
import LeftArrow from "../Assets/LeftArrow.png";
function EditDetailsForm() {
	return (
        <EditDetailsWrapper>
            <button className="back">
                <img src={LeftArrow} alt="" />
                <h4>Go back</h4>
            </button>
			<h1>Edit detail</h1>
			<p className="subheading">Leave fields that don't apply empty</p>
			<div className="input-wrapper">
				<h4>First name</h4>
				<input type="text" placeholder="Adeyemi" />
			</div>
			<div className="input-wrapper">
				<h4>Last name</h4>
				<input type="text" placeholder="Joy" />
			</div>
			<div className="input-wrapper">
				<h4>Phone</h4>
				<input type="tel" placeholder="Input new number" />
			</div>
			<div className="input-wrapper">
				<h4>Email</h4>
				<input type="email" placeholder="Change email" />
            </div>
            <PrimaryButton>
                <button>Submit</button>
            </PrimaryButton>
		</EditDetailsWrapper>
	);
}

export default EditDetailsForm;
