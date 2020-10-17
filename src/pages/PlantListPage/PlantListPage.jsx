import React, { Component } from 'react';
import PlantListCard from '../../components/PlantListCard/PlantListCard';
import './PlantListPage.css';
import * as plantAPI from '../../utils/plantService';

class PlantListPage extends Component {
    // async componentDidMount() {
    //     const plants = await plantAPI.getAll();
    //     this.setState({ plants });
    //   }

    render() {
        return (
            <div className="PlantListPage">
                <h1>Available Plants</h1>
                <div className ="PlantListPage-tamer">
                    {this.props.plants.map( plant =>
                    <PlantListCard
                        key={plant._id}
                        plant={plant}
                        user={this.props.user} 
                        handleDeletePlant={this.props.handleDeletePlant}
                    />
                    )}
                </div>
            </div>
        );
    }
}

export default PlantListPage;