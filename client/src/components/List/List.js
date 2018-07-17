import React from "react";
import "./ListItem.css";

export const List = ({ children, artwork, dtid, playBack, trackName, artistName, _id, trackUrl, buttonText, handleClick}) => (
    <div className="flex-container">
  <ul key={artistName} className="list-group-horizontal">
    {children}
  </ul>
    </div>
);
