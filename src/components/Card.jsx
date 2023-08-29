import React from "react";
import location from "../assets/location.png";

function Card(props) {
  return (
    <div className="card-container">
      <img className="card-img" src={props.imageUrl} alt="" />
      <div className="card-info-box">
        <img
          className="card-location-icon"
          src={location}
          alt="location icon"
        />
        <span className="card-country">{props.location}</span>
        <a className="google-link" href={props.googleMapsUrl} target="_blank">
          <span className="card-google">View on Google Maps</span>
        </a>
        <h2 className="card-location">{props.title}</h2>
        <h3 className="card-date">{props.startDate}</h3>
        <p className="card-desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
