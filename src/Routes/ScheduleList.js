import LeftBar from "../Components/LeftBar";
import ScheduleWrapper from "../Styles/ScheduleList.style";

function ScheduleList() {
    return (
        <ScheduleWrapper>
            <div className="container">
                <LeftBar/>
            </div>
            <div className="container"></div>
            <div className="container"></div>
        </ScheduleWrapper>
    )
}



export default ScheduleList;