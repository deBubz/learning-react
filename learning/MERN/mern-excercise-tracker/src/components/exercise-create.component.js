import React from "react";
import { Link } from "react-router-dom"

export default class ExCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value        // change user name to textbox(target) value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }  

    render() {
        return (
            <div><p>Exercise create component</p></div>
        );
    }
}