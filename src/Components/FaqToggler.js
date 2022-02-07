import { ToggleWrapper } from "../Styles/FAQ.style";
import { useState } from "react";

function FaqToggler({ title, text }) {
    const [ faqActive, setFaqActive ] = useState(false)

    function toggleFaq() {
        if (faqActive) {
        setFaqActive(false);
        } else {
            setFaqActive(true);
        }
    }
    return (
        <ToggleWrapper onClick={toggleFaq}>
            <div className="toggle-title-wrapper">
                <h3 className="title">{title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg"
                    display={faqActive? "unset": "none"} viewBox="0 0 39 39">
                    <g id="Ellipse_3" dataname="Ellipse 3" fill="#fff" stroke="#040404" strokeWidth="2">
                        <circle cx="19.5" cy="19.5" r="19.5" stroke="none" />
                        <circle cx="19.5" cy="19.5" r="18.5" fill="none" />
                    </g>
                    <rect id="Rectangle_5" dataname="Rectangle 5" width="23" height="3" transform="translate(8 19)" />

                </svg>
                <svg dataname="Component 7 – 1" xmlns="http://www.w3.org/2000/svg"
                    display={faqActive? "none": "unset"} viewBox="0 0 50 50">

                    <g id="Ellipse_3" dataname="Ellipse 3" fill="#fff" stroke="#040404" strokeWidth="2">
                        <circle cx="25" cy="25" r="25" stroke="none" />
                        <circle cx="25" cy="25" r="24" fill="none" />
                    </g>
                    <g id="Group_19" dataname="Group 19" transform="translate(12.029 10.966)">
                        <rect id="Rectangle_5" dataname="Rectangle 5" width="26" height="3" transform="translate(-0.029 12.034)" />
                        <rect id="Rectangle_6" dataname="Rectangle 6" width="26" height="3" transform="translate(13.971 0.034) rotate(90)" />
                    </g>
                </svg>
            </div>
            <p className="title-text"
                style={{
                    display: faqActive? "unset":"none"
                }}
            >
                {text}
            </p>
        </ToggleWrapper>
    )
}


export default FaqToggler;