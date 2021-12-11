import { HowFeatures, HowFeaturesWrapper, HowWrapper } from "../Styles/How.style";
import GreenArrow from "../Assets/ArrowGreen.png"

function How() {
    return (
        <HowWrapper>
            <h1 className="how-heading">How it works</h1>
            <HowFeaturesWrapper>
                <HowFeatures>
                    <div className="feature-title">
                        <h2>1</h2>
                        <h1>Sign up to ichores</h1>
                    </div>
                    <p className="feature-subtitle">
                        Sign up to ichores,  by adding your personal details and password
                    </p>
                </HowFeatures>
                <div className="arrow-container">
                    <img src={GreenArrow} alt="" className="green-arrow" />
                </div>
                <HowFeatures>
                    <div className="feature-title">
                        <h2>2</h2>
                        <h1>Choose your subscription.</h1>
                    </div>
                    <p className="feature-subtitle">
                        Choose your subscription for the concerning the plan you are interested in.
                    </p>
                </HowFeatures>
                <div className="arrow-container">
                    <img src={GreenArrow} alt="" className="green-arrow" />
                </div>
                <HowFeatures>
                    <div className="feature-title">
                        <h2>3</h2>
                        <h1>Monitor your subscription</h1>
                    </div>
                    <p className="feature-subtitle">
                        Sit back, relax and let your subscription run.
                    </p>
                </HowFeatures>
            </HowFeaturesWrapper>
        </HowWrapper>
    )
}


export default How;