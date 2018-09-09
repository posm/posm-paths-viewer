import { select as d3_select } from 'd3';
import mapboxgl from 'mapbox-gl';

export function mapUi(context) {
    const body = d3_select('body');

    let map = {};
    let glMap = () => { 
        mapboxgl.accessToken = 'pk.eyJ1IjoibWF4Z3Jvc3NtYW4iLCJhIjoiY2loZTQ5bHpxMGlyaXRwbHpsN3FscjA3bSJ9.ry1OJsQ5SCbhrH7fYd7adg';
        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    };
    
    
    map.render = () => {
        glMap();
    }
    return map;
} 