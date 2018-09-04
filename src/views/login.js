import { 
    select as d3_select,
    selectAll as d3_selectAll
} from 'd3';

import Handler from '../handler';
import css from '../styles/modal.css';

export function loginUi (context) {
    const body = d3_select('body');
    const handler = Handler.getInstance();

    d3_dispatch('loggedIn')

    function doLogin() {
        // place where interaction w/rails app will go
        handler.call('loggedIn', true);
    }

    function doClose() {
        d3_selectAll('.modal-overlay').remove()
        d3_selectAll('.modal').remove()
    }

    let login = {}

    login.render = () => {
        // gross, but a modal.
        body
            .append('div').attr('class', 'modal-overlay')
            .append('div').attr('class', 'modal')
            .append('div').attr('class', 'modal-content')

        let modalContent = d3_select('.modal-content');

        ['username', 'password'].forEach(input => {
            modalContent
                .append('div').attr('class', `login-input`).attr('id', `login-input-${input}`)
                .append('span').attr('class', 'input-name').text(input)
            
            d3_select(`#login-input-${input}`)
                .append('input')
                .attr('class', input)
                .attr('type', 'text')
        })

        modalContent
            .append('ul')
            .attr('class', 'control')
            .attr('id', 'login-buttons')

        let loginControls = d3_select('#login-buttons');

        loginControls
            .append('li').attr('id', 'login-ok').on('click', doLogin)
            .append('div').attr('id', 'login-ok-text').text('ok')

        loginControls
            .append('li').attr('id', 'login-close').on('click', doClose)
            .append('div').attr('id', 'login-close').text('close');
    
    }

    return login;
}