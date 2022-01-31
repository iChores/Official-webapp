import StatusWrapper from "../Styles/Status.style";

function Status() {
	return (
		<StatusWrapper>
			<h3>Subscription status</h3>
			<div className="sub-content">
				<h6>Plan type</h6>
				<p>Both</p>
			</div>
			<div className="sub-content">
				<h6>ACtive days remaining</h6>
				<p>27 days</p>
			</div>
			<div className="sub-content">
				<h6>Start date</h6>
				<p>2-1-2022</p>
			</div>
			<div className="sub-content">
				<h6>End date</h6>
				<p>7-2-2022</p>
			</div>
		</StatusWrapper>
	);
}


export default Status;