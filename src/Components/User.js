import UserWrapper from "../Styles/User.style";

function User({
	firstName,
	lastName,
	setPopUp,
	Status,
	setPopUpDetails,
	userType,
	Avatar,
}) {
	function handleClick() {
		setPopUp(true);
		setPopUpDetails([
			{
				firstName,
				lastName,
				Status,
				userType,
				Avatar,
			},
		]);
	}
	return (
		<UserWrapper onClick={handleClick}>
			<h3 className="name">
				{firstName} {lastName}
			</h3>
			<h3
				className="status"
				style={{ color: Status === "Active" ? "#03B952" : "lightgray" }}
			>
				{" "}
				{Status}
			</h3>
		</UserWrapper>
	);
}

export default User;
