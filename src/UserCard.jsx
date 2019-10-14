import React from "react"

const UserCard = ({ name, email, phone }) => (
    <div className="user-card">
        <h2>{ name }</h2>
        <span>{ email }</span>
        <p>{ phone }</p>
    </div>
)

export default UserCard;