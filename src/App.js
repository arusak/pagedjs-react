import React from 'react';
import {Cover} from './components/Cover.jsx';
import {Toc} from './components/Toc.jsx';
import {Content} from './components/Content.jsx';

const App = () => {
    // useLayoutEffect(() => {
    //   const previewer = new Previewer();
    //   previewer
    //     .preview(
    //       document.querySelector("#root").innerHTML,
    //       [],
    //       document.querySelector("#preview")
    //     )
    //     .then(flow => {
    //       console.log("preview rendered, total pages", flow.total, { flow });
    //     });
    //   return () => {
    //     // document.head
    //     //   .querySelectorAll('[data-pagedjs-inserted-styles]')
    //     //   .forEach((e) => e.parentNode?.removeChild(e))
    //   }
    // }, []);
    return <>
        <Cover/>
        <Toc/>
        <Content/>
    </>
        ;
};

export default App;
