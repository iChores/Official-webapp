import { PrimaryButton } from "../Styles/Buttons.style";
import Homekeeper from "./Homekeeper";
import Avatar from "../Assets/Avatar.png";
import { useReducer, useState } from "react";
import HomeKeeperWrapper from "../Styles/SelectHomeKeeper.style";
import { useEffect } from "react";

function SelectHomeKeeper({ homekeeperShow, totalPrice }) {
	const [allSelected, setAllSelected] = useState(false);
	return (
		<HomeKeeperWrapper
			style={{
				display: homekeeperShow ? "flex" : "none",
			}}
			className="home-keeper-wrapper"
		>
			<div className="home-keeper">
				<h2>Choose your homekeeper</h2>
				<div className="home-keeper-container">
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
					<Homekeeper
						Avatar={Avatar}
						Name={"Ella Argwu"}
						allSelected={allSelected}
						setAllSelected={setAllSelected}
					/>
				</div>
				<PrimaryButton>
					<button>Continue to payment</button>
				</PrimaryButton>
				<div className="price-container">
					<h3>Price</h3>
					<h4>
						{totalPrice} <span>Naira</span>
					</h4>
				</div>
			</div>
		</HomeKeeperWrapper>
	);
}

export default SelectHomeKeeper;
