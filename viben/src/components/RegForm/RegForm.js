import React from "react";


const RegForm = props => (
    <div>
        {/* Trigger the modal with a button */}
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Register</button>
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">New Account</h4>
                        {/*<button type="button" className="close" data-dismiss="modal">×</button>*/}

                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">
                                    <strong>Username</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="username"
                                    type="text"
                                    value={props.username}
                                    placeholder="create username"
                                    name="username"
                                    onChange={props.handleInputChange}
                                    required
                                />
                                <label htmlFor="email">
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
                                    <strong>Create Password</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="pw"
                                    type="number"
                                    value={props.pw}
                                    placeholder="create new password"
                                    name="pw"
                                    onChange={props.handleInputChange}
                                    required
                                />
                                <label htmlFor="pw2compare">
                                    <strong>Re-enter Password</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="pw2compare"
                                    type="number"
                                    value={props.pw2compare}
                                    placeholder="re-enter password"
                                    name="pw2compare"
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default RegForm;