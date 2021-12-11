import { Link } from "react-router-dom";
import { Faq } from "../Styles/FAQ.style";
import { PrimaryButton } from "../Styles/Buttons.style";
import FaqToggler from "./FaqToggler";


function FAQ() {
    return (
        <Faq>
            <div className="faq-container">
                <div className="faq-content">
                    <h1>Questions you may ask.</h1>
                    <h3>Got any more questions for us?</h3>
                    <PrimaryButton className="faq-content-button">
                        <Link to="/">
                            Contact us
                        </Link>
                    </PrimaryButton>
                </div>
            </div>
            <div className="faq-container">
                <FaqToggler title="How does iChores work?" text ="We run a subscription system where you create your routine and delegate associated chores to a Home Keeper. The Home Keeper takes responsibility for the delegated chores for the period of the subscription."/>
                <FaqToggler title="Who are these “Home Keepers”?" text ="Most “Home Keepers” are graduates from tertiary institutions with verified NYSC discharge certificates or currently enrolled in an undergraduate program. The rest are recruited from top vocational schools across the country for their unique skills in cooking or family support especially taking care of children."/>
                <FaqToggler title="What about background checks on the “Home Keepers”?" text ="We have an elaborate program for thoroughly vetting each “Home Keeper” bo virtually and in person before adding them to our platform."/>
                <FaqToggler title="Where is iChores present?" text ="You can use our services across all areas in Lagos except Epe, Abuja, Port Harcourt, Enugu City, and Ibadan."/>
            </div>
        </Faq>
    )
}


export default FAQ