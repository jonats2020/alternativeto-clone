import React from "react";
import "./AlternativeCard.css";

function AlternativeCard({ logoUrl, title = "", description = "" }) {
  return (
    <div className="alternativeCard__container">
      {/* logo container */}
      <div className="logoContainer">
        <img src={logoUrl} height={60} />
      </div>

      {/* description container */}
      <div className="descriptionContainer">
        <h3>{title}</h3>

        <br />

        <p>{description}</p>
      </div>
    </div>
  );
}

export default AlternativeCard;
