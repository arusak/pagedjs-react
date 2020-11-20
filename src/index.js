import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'), () => {
    console.log('running render callback');

    import('pagedjs/dist/paged.polyfill.js')
        .then(() => import('./thead.js'))
        .then(RepeatingTableHeaders => {
            window.Paged.registerHandlers(RepeatingTableHeaders);
        });
    // window.PagedConfig = {auto: false};

    // let p = new window.Paged.Previewer();
    // p.preview(document.querySelector('#root').innerHTML, [], document.querySelector('#preview'));
    // console.log(Object.keys(p));
});

