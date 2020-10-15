import React, { Component } from 'react'

class UpdatePlantPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state.plant
    };
    
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdatePlant(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({ 
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Edit Plant</h1>
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
                            SAVE PLANT
                        </button>
                        </form>
            </>
        );

    }
}

export default UpdatePlantPage;