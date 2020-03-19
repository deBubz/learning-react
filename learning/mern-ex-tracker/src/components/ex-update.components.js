import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class ExUpdate extends React.Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
 
    // set state for testing
    componentDidMount() {
        // get ex by id
        axios.get('http://localhost:8081/exercises/' + this.props.match.params.id)
            .then(resp => {
                this.setState({
                    username: resp.data.username,
                    description: resp.data.description,
                    duration: resp.data.duration,
                    date: new Date(resp.data.date),
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:8081/users/')
            .then(res => {
                if (res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                    })
                }
            });
    }

    // On Change Methods
    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value,
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date,
        });
    }

    // submit form
    onSubmit(e) {
        e.preventDefault();

        // new object to add
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        // add
        // console.log('this ok')
        console.log(exercise);
        // console.log('also ok')
        axios.post('http://localhost:8081/exercises/update/'+this.props.match.parans.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';      // redirect after adding
    }

    render() {
        return(
            <div className='container'>
                <h3>Update Exercise log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref="UserInput" required className='form-control'
                            value={this.state.name} onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(user => {
                                        return <option key={user} value={user}>{user}</option>
                                    })
                                }
                            </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type='text' required className='form-control'
                            value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className='form-group'>
                        <label>Duration: </label>
                        <input type='text' required className='form-control'
                            value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>
                    <div className='form-group'>
                        <label>Date: </label>
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Update Exercise Log' className='btn btn-primary' />
                    </div>
                </form>

            </div>
        ) 
    }
}