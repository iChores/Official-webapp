import { PrimaryButton } from "../Styles/Buttons.style";
import { Link } from "react-router-dom";
import JoinImg from "../Assets/JoinImg.png"
import { JoinWrapper } from "../Styles/Join.style";

function Join() {
    return (
        <JoinWrapper className="join">
            <div className="join-container">
                <div className="join-content">
                    <h1 className="join-title">Want to become a home keeper?</h1>
                    <p className="join-text">We call the chefs, cleaners, and other professionals that work with us ‘Home Keepers.’ They are each graduates or recruited from top cattery, cleaning, other top schools in the country.</p>
                    <PrimaryButton>
                        <Link to="/">
                            I fit this category
                        </Link>
                    </PrimaryButton>
                </div>
            </div>
            <img src={JoinImg} alt="" className="join-img" />
        </JoinWrapper>
    )
}

export default Join;