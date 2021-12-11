import { SecondaryButton } from "../Styles/Buttons.style";
import { Link } from "react-router-dom";
import FoodBowl from "../Assets/FoodBowl.png";
import Bucket from "../Assets/Bucket.png";
import Star from "../Assets/Star.png";
import LeftArrow from "../Assets/LeftArrow.png"
import{ WhySection,WhyWrapper} from "../Styles/Why.style";

function Why() {
    return (
        <WhySection>
            <WhyWrapper>
                <img src={Star} alt="" className="star" />
                <div className="why-container">
                    <div className="why-content">
                    <h1 className="why-heading">Why ichores?</h1>
                    <p className="why-text">
                       “You have always wanted a means to delegate home chores while you focus on BIGGER tasks, ICHORES is the answer.”
                    </p>
                    <SecondaryButton>
                        <Link to="/home">
                            Learn more
                            <div className="line"></div>
                        </Link>
                    </SecondaryButton>
                    </div>
                </div>
                <div className="why-container">
                    <div className="why-card-wrapper">
                        <div className="why-card">
                            <img src={FoodBowl} alt="" />
                            <h1>Home cooking</h1>
                            <p>Everything necessary to run home kitchen</p>
                            <ul>
                                <li>
                                    <img src={LeftArrow} alt="" />
                                    Meal planning
                                </li>
                                <li>
                                    <img src={LeftArrow} alt="" />
                                    Market runs
                                </li>
                                <li>
                                    <img src={LeftArrow} alt="" />
                                    Cooking
                                </li>

                            </ul>
                        </div>
                        <div className="why-card">
                            <img src={Bucket} alt="" />
                            <h1>Home CLeaning</h1>
                            <p>Everything covering home cleaning and laundry.</p>
                            <ul>
                                <li className="arrow-item">
                                    <img src={LeftArrow} alt="" />
                                    House cleaning
                                </li>
                                <li className="arrow-item">
                                    <img src={LeftArrow} alt="" />
                                    Laundry
                                </li>
                                <li className="arrow-item">
                                    <img src={LeftArrow} alt="" />
                                    Compound cleaning
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </WhyWrapper>
        </WhySection>
    )
}

export default Why;