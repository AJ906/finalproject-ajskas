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
                                <label htmlFor="userName">
                                    <strong>Username</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="username"
                                    type="text"
                                    value={props.userName}
                                    placeholder="create username"
                                    name="userName"
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
                                    type="text"
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
                                    type="text"
                                    value={props.pw2compare}
                                    placeholder="re-enter password"
                                    name="pw2compare"
                                    onChange={props.handleInputChange}
                                    required
                                />
                                <label htmlFor="proPic">
                                    <strong>Link Profile Photo (optional)</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="photoURL"
                                    type="text"
                                    value={props.proPic}
                                    placeholder="enter photo web address"
                                    name="proPic"
                                    onChange={props.handleInputChange}
                                />
                                <label htmlFor="instagram">
                                    <strong>Link your Instagram account (optional)</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="instagram"
                                    type="text"
                                    value={props.instagram}
                                    placeholder="enter Instagram account web address"
                                    name="instagram"
                                    onChange={props.handleInputChange}
                                />
                                <label htmlFor="twitter">
                                    <strong>Link your Twitter account (optional)</strong>
                                </label>
                                <input
                                    className="form-control"
                                    id="twitter"
                                    type="text"
                                    value={props.twitter}
                                    placeholder="enter Twitter account web address"
                                    name="twitter"
                                    onChange={props.handleInputChange}
                                />

                            </div>
                            <div className="pull-right" data-dismiss="modal">
                                <button
                                    onClick={props.handleFormSubmit}
                                    type="submit"
                                    className="btn btn-lg btn-dark"
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