import React, { Component } from 'react';
import './style.css';

export class preview extends Component {
    render() {
        const {username, message, thumbnail} = this.props.data;
        const hasAvatar = thumbnail ? true : false;
        return (
            <div className={!username && !message && !thumbnail ? "hide" : ""}>
                <h4>Prévia: </h4>
                <div className="preview row ml-2 mb-3">
                    <div className={"mt-1 mb-1 col-sm-2 " + (thumbnail ? "" : "hide")}>
                        <div
                            id="avatar" 
                            style={{backgroundImage: `url(${thumbnail})`}}
                        />
                    </div>
                    <div className={"col-sm-8 d-flex flex-column " + (hasAvatar ? "" : "ml-3")}>
                        <div className={"row username " + (username ? "" : "hide")}>
                            <div className="d-flex">{username} <span className="ml-1 mt-1 px-1 tag">BOT</span></div>
                        </div>
                        <div>
                            <p className="row msg">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default preview
