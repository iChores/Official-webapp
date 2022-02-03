import { useState } from "react"
import AdminListToggler from "../Components/AdminListToggler"
import AdminWrapper from "../Styles/Admin.style"

function Admin() {
    const [adminToggle, setAdminToggle] = useState("List")
    return (
        <AdminWrapper>
            <AdminListToggler adminToggle={adminToggle} setAdminToggle={setAdminToggle }/>
            <div className="admin-container"></div>
        </AdminWrapper>
    )
}


export default Admin