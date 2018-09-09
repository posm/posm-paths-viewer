import { 
    select as d3_select,
    selectAll as d3_selectAll
} from 'd3';

import Handler from '../handler';
import Store from '../store';
import css from '../styles/modal.css';

export function loginUi (context) {
    const body = d3_select('body');
    const handler = Handler.getInstance();
    
    function doLogin() {
        // place where interaction w/rails app will go
        handler.call('login', Store.getInstance(), true);
    }

    function doClose() {
        d3_selectAll('.modal-overlay').remove()
        d3_selectAll('.modal').remove()
    }

    function doLoginWarn () {
        if (d3_select('#login-fail').empty()) {
            d3_select('.modal-content')
                .append('div').attr('class', 'login-component').attr('id', 'login-fail')
                .append('span').attr('class', 'alert alert-warning').text('Login Failed!')
        }
    }

    // on loggedIn, close!
    handler.on('loggedIn', doClose);
    handler.on('loginFailed', doLoginWarn);

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
                .append('div').attr('class', `login-input login-component`).attr('id', `login-${input}`)
                .append('span').attr('class', 'input-name').text(input)
            
            d3_select(`#login-${input}`)
                .append('input')
                .attr('class', 'login-input-text')
                .attr('id', `login-${input}-input`)
                .attr('type', 'text')
        })

        modalContent
            .append('div').attr('id', 'login-buttons').attr('class', 'login-component')
            .append('ul').attr('id', 'login-controls').attr('class', 'control');

        let loginControls = d3_select('#login-controls');

        loginControls
            .append('li').attr('id', 'login-ok').on('click', doLogin)
            .append('div').attr('id', 'login-ok-text').attr('class', 'button button-long').text('ok')

        loginControls
            .append('li').attr('id', 'login-close').on('click', doClose)
            .append('div').attr('id', 'login-close').attr('class', 'button button-long').text('close');
    
    }

    return login;
}