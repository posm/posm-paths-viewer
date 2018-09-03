import { select as d3_select } from 'd3';

export function mainUi(context) {
    var main = {};
    main.context = context;
    main.render = () => {
        const body = d3_select('body');
        // build nav
        body
            .append('div')
            .attr('id', 'nav')

        // build map
        body
            .append('div')
            .attr('id', 'map')

    }
    return main;
}