import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from "axios"

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    // Native Javascript
    // componentDidMount() {
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     fetch(url, {method: 'get'})
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({
    //             users: json
    //         })
    //     })
    // }

    // Library Axios
    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
        .then(resp => {
            this.setState({
                users: resp.data
            })
        })
    }

    render() {
        const { users } = this.state;
        /* return () || return {} */
        return (
            <>
                <h1>Usuarios</h1>
                <div className="grid-4 grid">
                    {
                        users.map(u => (
                            <UserCard key={u.id} 
                                name={u.username} 
                                email={u.email} 
                                phone={u.phone}
                            />
                            ))
                    }
                </div>
            </>
        )       
    }
}

export default Users;