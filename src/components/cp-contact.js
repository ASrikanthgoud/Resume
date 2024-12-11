import React from "react";

const Contact = () => {
    return (
        <div className="d-flex space-between">
            <div>
            <h2>Contact</h2>
            <p className="contact_container">
                <strong><span className="font-20">&#128222; </span>Phone:</strong> +91 8008865650
                <br />
                <strong><span className="font-30">&#9993; </span> Email:</strong> alladisrikanth555@gmail.com
                <br />
                <strong><span className="font-20">&#128279; </span> LinkedIn:</strong> <a href="https://www.linkedin.com/in/srikanth-goud-25459aa7/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/srikanth-goud-25459aa7/</a>
                <br />
                <strong><span className="font-20">&#127970; </span> Location: </strong> Hyderabad, India
            </p>
            </div>
            <div className="gif_image_container">
                <img
                    className="gif_img_1"
                    src={require("../images/contact.gif")}
                    alt="Srikanth Goud"
                />
            </div>
            </div>
    );
};

export default Contact;
