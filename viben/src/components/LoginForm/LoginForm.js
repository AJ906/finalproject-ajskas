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
                placeholder="Email"
                name="email"
                onChange={props.handleInputChange}
                required
            />
            <label htmlFor="start-year">
                <strong>Password</strong>
            </label>
            <input
                className="form-control"
                id="pw"
                type="number"
                value={props.pw}
                placeholder="2017"
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




// <div className="row">
//

//
//     <div className="col s2 right">
//         <button onClick={handleClick} className="btn waves-effect waves-light" type="submit" name="action" >
//             Login
//         </button>
//     </div>
//     <div className="input-field col s2 right">
//         <input placeholder="Password" id="pw" type="password" className="validate"  />
//     </div>
//     <div className="input-field col s2 right">
//         <input placeholder="Email" id="email" type="email" className="validate" />
//     </div>
//
// </div>






export default LoginForm;