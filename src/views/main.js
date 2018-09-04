import { select as d3_select } from 'd3';
import { navUi } from './nav';


export function mainUi(context) {
    let main = {};
    main.render = () => {
        const body = d3_select('body');
        // build nav
        body
            .append('div')
            .attr('class', 'nav')
        
        navUi(context).render();

        // build map
        // body
        //     .append('div')
        //     .attr('id', 'map')
        //     .call(mapUi(context).render())

    }
    return main;
}