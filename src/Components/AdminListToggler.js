import ListToggler from "../Styles/AdminListToggler.style";

function AdminListToggler({ adminToggle, setAdminToggle }) {
	return (
		<ListToggler>
			<button
				onClick={() => {
					setAdminToggle("List");
				}}
				className="toggle-button"
				style={{
					color: adminToggle === "List" ? "black" : "white",
					background: adminToggle === "List" ? "#3DEAA3" : "black",
				}}
			>
				Home Keeper details
			</button>
			<button
				onClick={() => {
					setAdminToggle("Create");
				}}
				className="toggle-button"
				style={{
					color: adminToggle === "Create" ? "black" : "white",
					background: adminToggle === "Create" ? "#3DEAA3" : "black",
				}}
			>
				Create Home keeper
			</button>
		</ListToggler>
	);
}




export default AdminListToggler;