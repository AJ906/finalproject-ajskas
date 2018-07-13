import React from "react";


const MusicSearchForm = props => (
    <form>
        <div className="form-group">
            <label htmlFor="searchValue">
                <strong>Powered by iTunes</strong>
            </label>
            <input
                className="form-control"
                id="searchValue"
                type="searchValue"
                value={props.searchValue}
                placeholder="Search by song title, artist name, or album title."
                name="searchValue"
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
                Search
            </button>
        </div>
    </form>
);


export default MusicSearchForm;