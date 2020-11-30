import React from 'react';
import ReactDOM from 'react-dom';
import {Previewer, registerHandlers} from 'pagedjs/lib/index.js';

import App from './App';
import {RepeatingTableHeadersHandler} from './repeating-table-headers.handler.js';

ReactDOM.render(<App/>, document.getElementById('root'), () => {
    // should register all handlers before preview
    registerHandlers(RepeatingTableHeadersHandler);

    // list all stylesheets to give them to pagedjs
    const stylesheets = Array.from(document.styleSheets).map(css => css.href);
    const rootElement = document.querySelector('#root');
    const previewElement = document.querySelector('#preview');

    const previewer = new Previewer();

    previewer.preview(
        rootElement.innerHTML,
        stylesheets,
        previewElement
    ).then(flow => {
        rootElement.remove();
        console.log('Preview rendered, total pages', flow.total, {flow});
    });
});

