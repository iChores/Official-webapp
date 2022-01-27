import HomeKeeperImg from "../Assets/HomeKeeperImg.jpg";
import HouseKeeperDetailsWrapper from "../Styles/HouseKeeperDetails.style";

function HouseKeeperDetails({name,serviceType}) {
    return (
			<HouseKeeperDetailsWrapper>
				<h2>HomeKeeper Details</h2>
				<div className="avatar">
					<img src={HomeKeeperImg} />
				</div>
				<div className="info-container">
					<h4>Name</h4>
					<p>{name}</p>
				</div>
				<div className="info-container">
					<h4>Type</h4>
					<p>{serviceType}</p>
				</div>
			</HouseKeeperDetailsWrapper>
		);
}


export default HouseKeeperDetails;