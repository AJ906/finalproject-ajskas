import React from "react";
import "./ListItem.css";

export const List = ({ children }) => (
    <div className="flex-container">
  <ul className="list-group-horizontal">
    {children}
  </ul>
    </div>
);
