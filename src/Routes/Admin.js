import { useState } from "react";
import AdminListToggler from "../Components/AdminListToggler";
import User from "../Components/User";
import AdminWrapper from "../Styles/Admin.style";
import Avatar from "../Assets/HomeKeeperImg.jpg";
import UserPopUp from "../Components/UserPopUp";

function Admin() {
	const [adminToggle, setAdminToggle] = useState("List");
	const [popUpDetails, setPopUpDetails] = useState([{
		firstName: " sahuruge",
		lastName: "",
		Avatar: "",
		userType: "",
		Status: "",
	}]);
	const [popUp, setPopUp] = useState(false);
	const userOne = ["Eben", "Daniel", Avatar, "Home cleaner", "Active"];
	const userTwo = ["Tolani", "fashi", Avatar, "Home cooking", "Active"];
	return (
		<AdminWrapper>
			<AdminListToggler
				adminToggle={adminToggle}
				setAdminToggle={setAdminToggle}
			/>
			<div className="admin-wrapper">
				<div className="admin-container">
					<h1>Home keeper List</h1>
					<User
						firstName={userOne[0]}
						lastName={userOne[1]}
						Avatar={userOne[2]}
						userType={userOne[3]}
						Status={userOne[4]}
						setPopUp={setPopUp}
						setPopUpDetails={setPopUpDetails}
					/>
					<User
						firstName={userTwo[0]}
						lastName={userTwo[1]}
						Avatar={userTwo[2]}
						userType={userTwo[3]}
						Status={userTwo[4]}
						setPopUp={setPopUp}
						setPopUpDetails={setPopUpDetails}
					/>
				</div>
				<UserPopUp popUpDetails={popUpDetails} />
			</div>
		</AdminWrapper>
	);
}

export default Admin;
