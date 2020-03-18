import React from "react";
import { Link } from "react-router-dom"

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        }
    }

    render() {
        return (
            <div>
                <p> User Create Component</p>
            </div>
        );
    }
}