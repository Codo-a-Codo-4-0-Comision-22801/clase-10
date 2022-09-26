import React from "react";
import './Banner.css';

// Declaration exports
export let msg = "Hellor World!";
// Esto es un componente de React
export function Banner (props) {
    return <div className="banner" > { props.msg } </div>
}

// Esto es solo una funcion
// Default exports
export default function HelloWorld() {
    alert(msg);
}

