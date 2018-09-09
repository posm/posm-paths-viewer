import { select as d3_select } from 'd3';
import { navUi } from './nav';
import { mapUi } from './map';

export function mainUi(context) {
    let main = {};
    main.render = () => {
        const body = d3_select('body');
        // build nav
        body
            .append('div')
            .attr('id', 'nav')
            .attr('class', 'row')
        
        navUi(context).render();

        // build map
        body
            .append('div')
            .attr('id', 'map')
            .attr('class', 'row')

        mapUi(context).render();

    }
    return main;
}