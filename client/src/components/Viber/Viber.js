import React from "react";
import {Col, Row} from "../Grid";
import "./Viber.css";



const Viber = props => (


    <div id="viber">
        <a href="#">
        <img className="proPic"
             src={props.profilePic}
             alt=""
        />
        <p className="un">{props.viberName}</p>
        </a>
    </div>
);

export default Viber;
