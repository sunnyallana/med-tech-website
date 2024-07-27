import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;
        
        const lat = Math.random() * (69.06 - 55.34) + 55.34;
        const lng = Math.random() * (24.16 - 11.11) + 11.11;

        const swedenBounds = {
            north: 69.06,
            south: 55.34,
            east: 24.16,
            west: 11.11
        };

        const latWithinSweden = Math.max(swedenBounds.south, Math.min(swedenBounds.north, lat));
        const lngWithinSweden = Math.max(swedenBounds.west, Math.min(swedenBounds.east, lng));

        const map = L.map(mapRef.current).setView([latWithinSweden, lngWithinSweden], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            maxZoom: 18,
        }).addTo(map);

        L.marker([latWithinSweden, lngWithinSweden]).addTo(map);

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className="container-fluid" style={{ height: '100%' }}>
            <div id="map" ref={mapRef} style={{ height: '400px', margin:'4% 2% 4% 2%'}}></div>
        </div>
    );
};

export default MapComponent;
