import React from "react";


const LoginForm = props => (
    <form>
        <div className="form-group">
            <label htmlFor="topic">
                <strong>Email</strong>
            </label>
            <input
                className="form-control"
                id="email"
                type="text"
                value={props.email}
                placeholder="enter email address"
                name="email"
                onChange={props.handleInputChange}
                required
            />
            <label htmlFor="pw">
                <strong>Password</strong>
            </label>
            <input
                className="form-control"
                id="pw"
                type="number"
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
                className="btn btn-lg btn-danger"
            >
                Login
            </button>
        </div>
    </form>
);


export default LoginForm;