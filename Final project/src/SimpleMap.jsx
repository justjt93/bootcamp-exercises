import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <p className='tag'>{text}</p>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.083038,
      lng: 14.4097865
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCzVYFV-GbZ59O1V6QKtomgumYkaPZySF0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.083038}
            lng={14.4097865}
            text="Nice place to chill"
          />

          <AnyReactComponent
            lat={50.093038}
            lng={14.4097865}
            text="Partyy"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;