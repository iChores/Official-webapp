import { useState } from "react";
import styled from "styled-components";

function Homekeeper({ Avatar, Name, allSelected, setAllSelected }) {
	const [selected, setSelected] = useState(false);
	function SelectHomeKeeper() {
		if (!allSelected) {
			setSelected(true);
			setAllSelected(true);
		} else if (allSelected && !selected) {
			console.log("amiagbe ooo");
		} else {
			setSelected(false);
			setAllSelected(false);
		}
	}
	return (
		<AvatarWrapper onClick={SelectHomeKeeper}>
			<div
				className="avatar-container"
				style={{
					backgroundColor: selected ? "#3deaa3" : "white",
					border: selected ? "none" : "2px solid black",
				}}
			>
				<img src={Avatar} alt="" />
			</div>
			<h3>{Name}</h3>
		</AvatarWrapper>
	);
}

const AvatarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: fit-content;
	align-items: center;
	cursor: pointer;
	.avatar-container {
		width: 130px;
		height: 130px;
		display: flex;
		justify-content: center;
		pointer-events: none;
		flex-direction: column;
		padding: 7px;
		border-radius: 100px;
		position: relative;
		img {
		}
	}
`;

export default Homekeeper;
