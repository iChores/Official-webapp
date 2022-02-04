import { useState } from "react";
import AdminListToggler from "../Components/AdminListToggler";
import User from "../Components/User";
import AdminWrapper from "../Styles/Admin.style";
import Avatar from "../Assets/Avatar.png";
import UserPopUp from "../Components/UserPopUp";

function Admin() {
	const [adminToggle, setAdminToggle] = useState("List");
    const [popUp, setPopUp] = useState(false);
	const userOne = ["Eben", "Daniel", Avatar, "Home cleaner", "Active"];
	return (
		<AdminWrapper>
			<AdminListToggler
				adminToggle={adminToggle}
				setAdminToggle={setAdminToggle}
			/>
			<div className="admin-container">
				<h1>Home keeper List</h1>
				<User
					firstName={userOne[0]}
					lastName={userOne[1]}
					Avatar={userOne[2]}
					UserType={userOne[3]}
                    Status={userOne[4]}
                    setPopUp={setPopUp}
				/>
            </div>
            {popUp &&<UserPopUp/>}
		</AdminWrapper>
	);
}

export default Admin;
