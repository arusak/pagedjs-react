import React from 'react';
import {widgets} from '../generate-data.js';

export const Toc = () => (<section className="toc-page table-of-contents">
    <header className="widget-header-left">
        <h1>Table of contents</h1>
    </header>
    <ul>
        {widgets.map((w, idx) => (<li key={w.title}><a href={`#w${idx}`}>{w.title}</a></li>))}
    </ul>
</section>);
