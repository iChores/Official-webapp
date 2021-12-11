import RegisterForm from "../Components/RegisterForm";
import { useState } from "react";
import Sucess from "../Components/Sucessfull";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [stateName, setStateName] = useState("");
    const [streetName, setStreetName] = useState("");
    const [regionName, setRegionName] = useState("");
    const [phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const Lagos = [
        "select region",
        "Alimosho",
        "	Ajeromi-Ifelodun",
        "	Kosofe",
        "Mushin",
        "Oshodi-Isolo",
        "Ojo",
        "	Ikorodu",
        "Surulere",
        "Agege",
        "Ifako-Ijaiye",
        "	Somolu",
        "	Amuwo-Odofin",
        "Lagos Mainland",
        "	Ikeja",
        "Eti-Osa",
        "Badagry",
        "	Apapa",
        "	Lagos Island",
        "	Epe",
        "	Ibeju-Lekki"

    ]
    const Abuja = [
        "select region",
        "Abaji L.G.A",
        "Kuje",
        "Bwari",
        "Kwali",
        "Gwagwalada",
        "Abuja municipal",
    ]
    const Enugu = [
        "select region",
        "Aninri",
        "Awgu",
        "Enugu East",
        "Enugu North",
        "Enugu South",
        "Ezeagu",
        "Igbo Etiti",
        "Igbo Eze North",
        "Igbo Eze South",
        "Isi Uzo",
        "Nkanu East",
        "Nkanu West",
        "Nsukka",
        "Oji River",
        "Udenu",
        "Udi",
        "Uzo-Uwani"

    ]

    const generateLGA = () => {
        switch (stateName) {
            case "Lagos":
                return Lagos
            case "Abuja":
                return Abuja
            case "Enugu":
                return Enugu
            default:
                return["Please select a state"]
        }
    }
    const LGA = generateLGA();
    return (
        <>
            <RegisterForm
                firstName={firstName}
                lastName={lastName}
                stateName={stateName}
                streetName={streetName}
                regionName={regionName}
                phone={phone}
                setPhone = {setPhone}
                Email={Email}
                Password={Password}
                confirmPassword={confirmPassword}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setStateName={setStateName}
                setStreetName={setStreetName}
                setRegionName={setRegionName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                LGA = {LGA}
            />
            <Sucess/>

        </>
    )
}

export default Register;