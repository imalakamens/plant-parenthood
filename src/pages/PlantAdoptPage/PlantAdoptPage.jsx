import React, { Component } from 'react'


class PlantAdoptPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            body:'',
            sender: this.props.user,
            recipient: this.props.location.state.plant.owner
            
        }
    };
    
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCreateMessage(this.state.formData);
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
            <div className="PlantAdoptPage">
                <h1>Plant Adoption Form</h1>
                        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            {<label>Message {this.props.location.state.plant.owner.name} (required)</label>}
                            <textarea
                            className="form-control"
                            name="body"
                            value={this.state.formData.body}
                            onChange={this.handleChange}
                            required
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

export default PlantAdoptPage;