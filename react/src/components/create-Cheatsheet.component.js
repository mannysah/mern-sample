import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCheatsheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cheatsheet_description: '',
            cheatsheet_responsible: '',
            cheatsheet_priority: '',
            cheatsheet_completed: false
        }

        this.onChangeCheatsheetDescription = this.onChangeCheatsheetDescription.bind(this);
        this.onChangeCheatsheetResponsible = this.onChangeCheatsheetResponsible.bind(this);
        this.onChangeCheatsheetPriority = this.onChangeCheatsheetPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.cheatsheet_description}`);
        console.log(`Todo Responsible: ${this.state.cheatsheet_responsible}`);
        console.log(`Todo Priority: ${this.state.cheatsheet_priority}`);
     
        const newCheatsheet = {
            cheatsheet_description: this.state.cheatsheet_description,
            cheatsheet_responsible: this.state.cheatsheet_responsible,
            cheatsheet_priority: this.state.cheatsheet_priority,
            cheatsheet_completed: this.state.cheatsheet_completed
        };

        axios.post('http://localhost:4000/cheatsheets/add', newCheatsheet)
            .then(res => console.log(res.data));

        this.setState({
            cheatsheet_description: '',
            cheatsheet_responsible: '',
            cheatsheet_priority: '',
            cheatsheet_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Cheatsheet</h3>
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

                    <div className="form-group">
                        <input type="submit" value="Create Cheatsheet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}