import React from "react";
import "./twitterCard.css";

const twitterCard = ({userName, name}) => {
  return (
    <>
      <div className="container">
        <div className="cabecera">
          <img
            className="imagen"
            src={`https://unavatar.io/${userName}`} 
            alt="avataren"
          />
          <div className="textos">
            <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
        </div>
        <div className="boton">
          <button>Seguir</button>
        </div>
      </div>
    </>
  );
};

export default twitterCard;
