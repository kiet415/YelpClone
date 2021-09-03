import React from "react"
import MarkerManager from "../../util/marker_manager";
import { isEqual } from "lodash"
import { withRouter } from "react-router";
const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});
const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13,
};
class KelpMap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      }
    }
    shouldComponentUpdate(nextProps) {
      
      if(!this.props.singleBusiness && (_.isEqual(this.props.businesses, nextProps.businesses))) {
        return false;
      }
      return true;
    }
    componentDidMount() {
      // set the map to show SF
      
      const map = this.refs.map;
      // wrap this.mapNode in a GoogleMap
      
      
       if(this.props.singleBusiness) {
        let mapOptions = {center: {lat: parseFloat(this.props.business.lat), lng: parseFloat(this.props.business.lng)}, zoom: 14}
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.props.fetchBusiness(this.props.business.id);
      } else {
        
        let mapOptions = {center: {lat: parseFloat(this.props.businesses[0].lat), lng: parseFloat(this.props.businesses[0].lng)}, zoom: 12}
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.businesses)
        //this.registerListeners();
      }

    }
    componentDidUpdate() {
      if (this.props.singleBusiness) {
        this.MarkerManager.updateMarkers([this.props.business]);
      } else {
        let mapOptions = {center: {lat: parseFloat(this.props.businesses[0].lat), lng: parseFloat(this.props.businesses[0].lng)}, zoom: 12}
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses)
      }
    }
    registerListeners() {
      // google.maps.event.addListener(this.map , 'idle', () => {
      //   const {north, south, east, west} = this.map.getBounds().toJSON();
      //   const bounds = {
      //     northEast: {lat: north, lng: east},
      //     southWest: {lat: south, lng: west} };
      //   this.props.updateFilter('bounds', bounds);
      // })
      google.maps.event.addListener(this.map, 'click', (event) => {
        const coords = getCoordsObj(event.latLng);
        
        this.handleClick(coords);
      })
    }
    handleMarkerClick(business) {
      this.props.history.push(`business/${business.id}`);
    }
    handleClick(coords) {
      this.props.history.push({
        pathname: '/business',
        search: `lat=${coords.lat}&lng=${coords.lng}`
      })
    }
    render() {
      

      return (
        // ...
        <div className={this.props.className} ref={ map => this.mapNode = map }> </div>
      )
    }
  
    //...
  }

  export default withRouter(KelpMap);