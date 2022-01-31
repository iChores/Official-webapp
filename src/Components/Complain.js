import { PrimaryButton } from "../Styles/Buttons.style";
import ComplainWrapper from "../Styles/Complain.style";

function Complain() {
    return (
        <ComplainWrapper>
            <h2>Tell us your complain</h2>
            <div className="form-wrapper">
                <h5>What problems you are facing?</h5>
                <input type="text" />
                <PrimaryButton>
                    <button>Send</button>
                </PrimaryButton>
            </div>
        </ComplainWrapper>
    )
}

export default Complain;