import React from "react";

export default function Navbar(props) {
    return (<img src={ props.logo } width={ props.size } alt="logo"></img>);
}

Navbar.defaultProps = {
    size: 60
}