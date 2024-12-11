import React from "react";

const ProfessionalSummary = () => {
    const summary = [
        "9+ years of significant IT experience as a UI Developer.",
        "Expertise in UI technologies (Web and Hybrid Mobile) including Ionic framework, HTML5, CSS3, and Bootstrap.",
        "Proficient in scripting languages: AngularJS 1.x, Angular x, Typescript, JavaScript, JQuery.",
        "4 years of hands-on experience in React.js framework.",
        "Basic knowledge of MySQL & MongoDB (NoSQL) databases.",
        "Skilled in HTTP/AJAX, JSON data handling, and consuming RESTful web services.",
        "Proficient in responsive web design for all device types.",
        "Experience in developing hybrid mobile applications for Android and iOS using the Ionic framework.",
        "Expertise in deep debugging through browser developer tools.",
        "Experienced with tools such as Visual Studio Code, Eclipse, Sublime, GitHub, Sourcetree, Bitbucket, and Azure DevOps.",
        "Adept at testing applications, identifying bugs, and providing immediate fixes.",
        "Ability to manage and work on multiple projects simultaneously to high standards.",
        "Strong ability to understand and work with various script languages and third- party libraries.",
        "Proven track record in developing multiple POCs, creating interfaces between backend and frontend.",
        "Collaborated closely with senior developers, product managers, system architects, and QA teams.",
        "Experience in performance and load testing using JMeter.",
        "Attended agile methods and participated in standup calls regularly to ensure smooth project progress."
    ];

    return (
        <div className="professional_summary_container">
            <div>
            <h2>Professional Summary</h2>
            <ul className="animated-list">
                {summary.map((item, index) => (
                    <li key={index} style={{ animationDelay: `${index * 0.3}s` }}>
                        {item}
                    </li>
                ))}
                </ul>
            </div>
            <div className="gif_image_container">
                <img
                    className="gif_img"
                    src={require("../images/tv.gif")}
                    alt="Srikanth Goud"
                />
            </div>
        </div>
    );
};

export default ProfessionalSummary;
