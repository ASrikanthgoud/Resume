import React from "react";

const Experience = () => {
    const experiences = [
        {
            role: "Lead Engineer",
            company: "Kellton Tech Solutions Limited",
            duration: "June 2023 – Present",
            description: "A product-based company that develops 'Hooper', a low-code automation platform for businesses of all sizes. On the client side, the Hooper app is available on Android/iOS on mobile and available over the web as well.",
            projectName: "Hooper Product (Web Application)",
            items: [
                "Developed responsive web applications using ReactJS, Redux, Context, JavaScript, HTML5, CSS.",
                "Utilized HTTP/AJAX for data transmission in JSON and consumed RESTful web services.",
                "Led a POC on integrating dynamic graphs into the web application using Chart.js.",
                "Conducted code reviews and provided suggestions to team members.",
                "Managed a team of 4 developers and coordinated with the testing team to resolve bugs."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Hooper Labs (TOE Networks)",
            duration: "May 2015 – May 2023",
            description: "A product-based company that develops 'Hooper', a low-code automation platform for businesses of all sizes. On the client side, the Hooper app is available on Android/iOS on mobile and available over the web as well.",
            projectName: "Hooper (Web Portal and Hybrid Mobile Application)",
            items: [
                "Developed responsive web application (Hooper) using AngularJS, Bootstrap, CSS3, HTML5, JavaScript & MVC frameworks.",
                "Developed responsive Mobile hybrid application (Hooper) for Android/iOS using Angular, Ionic, CSS3, HTML5,Typescript.",
                "I have used HTTP/AJAX to send and retrieve data files in JSON and to consume a RESTful web service.",
                "I have done POC on a dynamic form creator tool into the Hooper web application.",
                "I have done POC on dynamic graphs into the Hooper web application.",
                "I have Integrated Charts (Bar and Pie Graphs) using Chart.js and ng2-charts.",
                "Testing Restful services using Rest Client or Postman.",
                "I have done deep debugging through browser developer tools.",
                "Utilized Source Tree for concurrent development and code repository management.",
                "Coordinated with the testing team to resolve bugs."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Hooper Labs (TOE Networks)",
            duration: "Jan 2022 – March 2022",
            description: "An e-commerce app designed for small retail stores in Kenya. Anytime Ltd, a large-scale wholesale distributor of FMCG products, needed a comprehensive mobile app to onboard their growing user base of over 5000 stores.",
            projectName: "Soko Time (Hybrid Consumer Mobile Application)",
            items: [
                "Developed a responsive hybrid mobile applications for Android/iOS using Angular10, Ionic5, CSS3, HTML5, Typescript.",
                "Integrated M-pesa for online payments.",
                "Tested RESTful services using Rest Client and Postman.",
                "Conducted deep debugging using browser developer tools.",
                "Utilized Source Tree for concurrent development and code repository management.",
                "Coordinated with the testing team to resolve bugs."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Hooper Labs (TOE Networks)",
            duration: "Oct 2021 – Dec 2021",
            description: "Rent-A-Desk, a leading co-working space provider with locations across major Indian metros, needed an app to enhance the digital experience for their customers. The app allows users to check availability, book meeting rooms, and raise support tickets.",
            projectName: "Rent A Desk (Hybrid Consumer Mobile Application)",
            items: [
                "Developed a responsive hybrid mobile applications for Android/iOS using Angular10, Ionic5, CSS3, HTML5, Typescript.",
                "Tested RESTful services using Rest Client and Postman.",
                "Conducted deep debugging using browser developer tools.",
                "Utilized Source Tree for concurrent development and code repository management.",
                "Coordinated with the testing team to resolve bugs."
            ]
        },
    ];

    return (
        <div className="timeline-container d-flex space-between">
            <div>
            <h2>Work Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <p><strong>Project:</strong> {exp.projectName}</p>
                            <p><strong>{exp.duration}</strong></p>
                            <p>{exp.description}</p>
                            <ul className="tasks-list">
                                {exp?.items?.map((task, index) => (
                                    <li key={index} className="task-item">
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="exp_gif_image_container">

                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/world-2.gif")}
                        alt="Srikanth Goud"
                    />
                </div>
                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/world-3.gif")}
                        alt="Srikanth Goud"
                    />
                </div>
                
                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/world-1.gif")}
                        alt="Srikanth Goud"
                    />
                </div>
               
                <div>
                    <img
                    className="exp_gif_img"
                    src={require("../images/exp-1.gif")}
                    alt="Srikanth Goud"
                />
                </div>
                
                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/exp-3.gif")}
                        alt="Srikanth Goud"
                    />
                </div>

                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/exp-2.gif")}
                        alt="Srikanth Goud"
                    />
                </div>
                <div>
                    <img
                        className="exp_gif_img"
                        src={require("../images/techn1.gif")}
                        alt="Srikanth Goud"
                    />
                </div>
                
            </div>
        </div>
    );
};

export default Experience;
