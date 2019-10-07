import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                <strong style={textStyle}>Wollt</strong>
            </div>
        )
    }
}

const footerStyle = {
    backgroundColor: "#808de2",
    height: "20px",
    textAlign: "center",
    fontFamily: "inherit",
    position: "fixed",
    bottom: 0,
    width: "100%",
    color: "white"
}

const textStyle = {
    fontSize: "16px"

}

export default Footer
