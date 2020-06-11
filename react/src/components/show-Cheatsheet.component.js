import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cheatsheet = props => (
    <tr>
        <td>{props.cheatsheet.cheatsheet_description}</td>
        <td>{props.cheatsheet.cheatsheet_responsible}</td>
        <td>{props.cheatsheet.cheatsheet_priority}</td>
        <td>
            <Link to={"/edit/"+props.cheatsheet._id}>Edit</Link>
        </td>
    </tr>
)

export default class ShowCheatsheets extends Component {
    constructor(props) {
        super(props);
        this.state = {cheatsheets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cheatsheets/')
            .then(response => {
                console.log(response.data);
                
                this.setState({ cheatsheets: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    showCheatsheets() {
        console.log(this.state.cheatsheets.length)
        return this.state.cheatsheets.map(function(currentCheatsheet, i){
            console.log(currentCheatsheet);
            return <Cheatsheet cheatsheet={currentCheatsheet} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Show Cheatsheets</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.showCheatsheets() }
                    </tbody>
                </table>
            </div>
        )    }
}