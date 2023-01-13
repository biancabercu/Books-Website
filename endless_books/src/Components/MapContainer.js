import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import App from '../App';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
      
        google={this.props.google}
        zoom={19}
        style={mapStyles}
        initialCenter={
          {
            lat: 45.16377946782936,
            lng: 26.814361553996946 //45.16377946782936, 26.814361553996946
          }
        }
        
      >
       <Marker onClick={this.onMarkerClick}
        name={'Cinema'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
    </Map>
    );
  }
}
MapContainer = GoogleApiWrapper({
  apiKey: ("AIzaSyDVYpGY0gp8PzCE_3BNM1MmcrrbPPVzpTM")
})(MapContainer)