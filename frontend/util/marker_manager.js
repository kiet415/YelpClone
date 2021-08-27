class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers= {};
    }

    updateMarkers(businesses) {
        const businessesObj = {};
        businesses.forEach(business => businessesObj[business.id] = business);
        
        businesses
            .filter(business => !this.markers[business.id])
            .forEach((newBusiness,idx) => this.createMarkerFromBench(newBusiness, idx, this.handleClick))
        
        Object.keys(this.markers)
            .filter(businessId => !businessesObj[businessId])
            .forEach((businessId) => this.removeMarker(this.markers[businessId]))
    }

    createMarkerFromBench(business, idx) {
        const position = new google.maps.LatLng(business.lat, business.lng);
        let index = idx+1;
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id,
            label: index.toString(),
        });
        
        marker.addListener('click', () => this.handleClick(business));
        this.markers[marker.businessId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.businessId].setMap(null);
        delete this.markers[marker.benchId];
    }
}

export default MarkerManager;