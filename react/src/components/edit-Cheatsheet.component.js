import React, { Component } from 'react';
import axios from 'axios';

export default class EditCheatsheet extends Component {
    constructor(props) {
        super(props);
        this.onChangeCheatsheetDescription = this.onChangeCheatsheetDescription.bind(this);
        this.onChangeCheatsheetResponsible = this.onChangeCheatsheetResponsible.bind(this);
        this.onChangeCheatsheetPriority = this.onChangeCheatsheetPriority.bind(this);
        this.onChangeCheatsheetCompleted = this.onChangeCheatsheetCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cheatsheet_description: '',
            cheatsheet_responsible: '',
            cheatsheet_priority: '',
            cheatsheet_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cheatsheets/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    cheatsheet_description: response.data.cheatsheet_description,
                    cheatsheet_responsible: response.data.cheatsheet_responsible,
                    cheatsheet_priority: response.data.cheatsheet_priority,
                    cheatsheet_completed: response.data.cheatsheet_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeCheatsheetDescription(e) {
        this.setState({
            cheatsheet_description: e.target.value
        });
    }

    onChangeCheatsheetResponsible(e) {
        this.setState({
            cheatsheet_responsible: e.target.value
        });
    }

    onChangeCheatsheetPriority(e) {
        this.setState({
            cheatsheet_priority: e.target.value
        });
    }

    onChangeCheatsheetCompleted(e) {
        this.setState({
            cheatsheet_completed: !this.state.cheatsheet_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            cheatsheet_description: this.state.cheatsheet_description,
            cheatsheet_responsible: this.state.cheatsheet_responsible,
            cheatsheet_priority: this.state.cheatsheet_priority,
            cheatsheet_completed: this.state.cheatsheet_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Edit Cheatsheet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cheatsheet_description}
                                onChange={this.onChangeCheatsheetDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.cheatsheet_responsible}
                                onChange={this.onChangeCheatsheetResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.cheatsheet_priority==='Low'} 
                                    onChange={this.onChangeCheatsheetPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.cheatsheet_priority==='Medium'} 
                                    onChange={this.onChangeCheatsheetPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.cheatsheet_priority==='High'} 
                                    onChange={this.onChangeCheatsheetPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeCheatsheetCompleted}
                                checked={this.state.cheatsheet_completed}
                                value={this.state.cheatsheet_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}