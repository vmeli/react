import React from "react";

const Historial = ({ match, location, history }) => {
    return <>
        <div>Match: { JSON.stringify(match) }</div>
        <div>Location: { JSON.stringify(location) }</div>
        <div>History: { JSON.stringify(history) }</div>
    </>
}

export default Historial;