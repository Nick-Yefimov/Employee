import React, {Component} from "react";

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(proprs) {
        super(proprs);
        this.state = {
            name: '',
            salary: ''
        } 
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    } 

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length >= 2 && this.state.salary !== '') {      
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                    name: '',
                    salary: ''
            })
        }
    }


    render() {
        const {name, salary} = this.state;
       
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit= {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;