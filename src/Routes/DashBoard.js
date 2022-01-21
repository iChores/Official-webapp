import ScheduleList from "./ScheduleList";
import Subscribe from "./subscribe";

function Dashboard({user}) {
	return (<>
		<Subscribe user={user} />
		<ScheduleList/>
	</>);
}

export default Dashboard;