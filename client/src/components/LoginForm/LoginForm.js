import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const LoginForm = props => (
    <form>
        <div className="form-group">
            <label htmlFor="userName">
                <strong>Username</strong>
            </label>
            <input
                className="form-control"
                id="userName"
                type="text"
                value={props.userName}
                placeholder="enter username"
                name="userName"
                onChange={props.handleInputChange}
                required
            />
            <label htmlFor="pw">
                <strong>Password</strong>
            </label>
            <input
                className="form-control"
                id="pw"
                type="text"
                value={props.pw}
                placeholder="enter password"
                name="pw"
                onChange={props.handleInputChange}
                required
            />
        </div>
        <div className="pull-right">


                    <button
                        onClick={props.handleFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-dark"

                    >
                       Login
                    </button>





        </div>
    </form>
);


export default LoginForm;