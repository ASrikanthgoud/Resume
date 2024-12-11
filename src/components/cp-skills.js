import React from "react";

const Skills = () => {
    const skills = [
        "React.js",
        "AngularJS 1.x, Angular x",
        "Ionic Framework",
        "HTML5, CSS3, Bootstrap",
        "JavaScript, TypeScript, JQuery",
        "MySQL, MongoDB",
        "Visual Studio Code, Eclipse, Sublime, GitHub, Sourcetree, Bitbucket, Azure DevOps",
        "Rest Client, Postman, Jmeter"
    ];

    return (
        <div className="d-flex space-between">
            <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            </div>
            <div className="gif_image_container">
                <img
                    className="gif_img_1"
                    src={require("../images/clock.gif")}
                    alt="Srikanth Goud"
                />
            </div>
        </div>
    );
};

export default Skills;
