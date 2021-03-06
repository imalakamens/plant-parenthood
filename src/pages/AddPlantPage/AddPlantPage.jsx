import React, { Component } from 'react'
import './AddPlantPage.css'

class AddPlantPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            commonName:'',
            scientificName:'',
            description:''
        }
    };
    
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPlant(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({ 
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    /*---Lifecycle Mehods---*/
    

    render() {
        return (
            <div className="AddPlantPage">
                <h1>Plant Adoption Form</h1>
                        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Common Name (required)</label>
                            <input
                            className="form-control"
                            name="commonName"
                            value={this.state.formData.commonName}
                            onChange={this.handleChange}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Scientific Name</label>
                            <input
                            className="form-control"
                            name="scientificName"
                            value={this.state.formData.scientificName}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                            className="form-control"
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={this.state.invalidForm}
                        >
                            PLACE PLANT
                        </button>
                        </form>
            </div>
        );

    }
}

export default AddPlantPage;