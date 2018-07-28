import React from "react";
import "./ListItem.css";

export const ListItem = props => (
  <li key = {props._id} className="list-group-item">
    {props.children}
  </li>
);
