import { useState } from "react/cjs/react.development";
import LeftBar from "../Components/LeftBar";
import ScheduleWrapper from "../Styles/ScheduleList.style";

function ScheduleList() {
    const [activeTab, setActiveTab] = useState("")
    return (
        <ScheduleWrapper>
            <div className="container">
                <LeftBar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <div className="container"></div>
            <div className="container"></div>
        </ScheduleWrapper>
    )
}



export default ScheduleList;