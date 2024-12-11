import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile_img_section">
              <div className="d-flex">
          <img
            className="profile_img"
            src={require("../images/Srikanth-Goud.jpeg")}
            alt="Srikanth Goud"
          />

          <div className="profile_details">
            <h1 className="p-0">A.Srikanth Goud</h1>
            <p className="profile_sub_title">FRONT-END DEVELOPER</p>
          </div>
        </div>
              <div className="gif_image_container">
          <img
            className="profile_img"
            src={require("../images/computer-man.gif")}
            alt="Srikanth Goud"
          />
        </div>
      </div>
      <div>
        <h2>Profile</h2>
        <p>
          To work in a technologically advanced organization as a Lead Engineer
          and UI Developer, where I can leverage my 9 years of experience in
          creating and developing diverse projects, contributing towards common
          goals of success and excellence.
        </p>
      </div>
    </>
  );
};

export default Profile;
