import React, { Component } from "react";
import User from "./User";
import axios from "axios"

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

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
                <User users={users} />
            </>
        )       
    }
}

export default Users;