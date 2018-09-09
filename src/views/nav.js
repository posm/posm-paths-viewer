import { select as d3_select } from 'd3';
import { dispatch as d3_dispatch } from 'd3-dispatch';
import { loginUi } from './index'

export function navUi(context) {
    let nav = {};
    d3_dispatch('login', 'logout');

    function login() {
        if (d3_select('#login-text').text() === 'login') {
            loginUi(context).render();
        } else {
            d3_dispatch.call('logout');
        }
    }
    nav.render = () => {
        let nav = d3_select('#nav');
        
        // controls
        let navControl = nav.append('ul').attr('class', 'control');

        navControl
            .append('li').attr('id', 'login').on('click' , login)
            .append('div').attr('id', 'login-text').attr('class', 'button').text(context.loggedIn ? 'logout' : 'login')


        navControl
            .append('li').attr('id', 'upload')
            .append('div').attr('id', 'upload-text').attr('class', 'button').text('upload')

        if (!context.loggedIn) {
            d3_select('#upload').attr('class', 'disabled')

        }
    }

    return nav;
}