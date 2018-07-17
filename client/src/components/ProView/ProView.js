import React from "react";
import "./ProView.css";
import {Col, Row} from "../Grid";

const ProView = props => (


    <div id="proView">
        <Row>
            <Col size="md-6">
                <img className="proPic"
                    src={props.profilePic}
                    alt=""
                />
                <Row>
                    <Col size="md-6">
                        <p>{props.instagram}</p>
                    </Col>
                    <Col size="md-6">
                        <p>{props.twitter}</p>
                    </Col>
                </Row>
            </Col>
            <Col size="md-6">
                <p>{props.userName}</p>
                <p>{props.userLocation}</p>
            </Col>
        </Row>
        <div id="user411">
            <Row>
                <Col size="md-6">
                    {props.user411}
                </Col>
            </Row>
        </div>
    </div>
);

export default ProView;
