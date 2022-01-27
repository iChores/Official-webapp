import ResponsibilityWrapper from "../Styles/Resp.style";

function Responsibility({Day,startTime, endTime,status}) {
	return (
		<ResponsibilityWrapper>
			<div className="flex-cont">
				<div className="schedule-wrap">
					<p>
						<b>Day:</b> {Day}
					</p>
					<p>
						<b>Time:</b> {startTime} - {endTime}
					</p>
				</div>
			</div>
			<div className="flex-cont">
				<button
					className="status-btn"
					style={{
						background: status === "Active" ? "#3DEAA3" : " #f35c7b",
					}}
				>
					{status}
				</button>
			</div>
		</ResponsibilityWrapper>
	);
}

export default Responsibility;
