import { Link } from "react-router-dom";
import CtaImg from "../Assets/Cta-img.png"
import { SecondaryButton } from "../Styles/Buttons.style";
import CtaWrapper from "../Styles/CTA.style";


function CTA() {
    return (
        <CtaWrapper>
            <div className="cta-container">
                <div className="cta-content">
                    <h1 className="cta-heading">
                        Say goodbye to
                        <span> chores</span> forever!
                    </h1>
                    <p className="cta-text">
                        Start worrying about what matters, leave the chores to us!
                    </p>
                    <SecondaryButton>
                        <Link to="/register">Get started <div className="line"></div></Link>
                    </SecondaryButton>
                </div>
            </div>
            <div className="cta-container">
                <img src={CtaImg} alt="" className="cta-img" />
            </div>
        </CtaWrapper>
    )
}

export default CTA;