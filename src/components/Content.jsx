import React from 'react';
import {widgets} from '../generate-data.js';
import {Chart} from './Chart.jsx';
import {Table} from './Table.jsx';

export const Content = () => (
    <section className="content-page">
        {
            widgets.map((w, idx) => (
                <article className="widget" key={`w${idx}`} id={`w${idx}`}>
                    {(w.type === 'long_table' || w.type === 'short_table') && (
                        <>
                            <div className="widget-header-left">
                                <div className="advisor">Rob Schultz Craig Steinhauer</div>
                                <div className="structure">JPM Max Growth (35%) / Blackrock RFI (40%) / Julex Capital
                                    (25%)
                                </div>
                                <h1>{w.title} <span className="continued">— continued</span></h1>
                            </div>

                            <div className="widget-header-right">
                                <div className="client">Prepared For Joe W. Smith</div>
                                <div className="dates">October 2010 - September 2020</div>
                                <h1>10 Years</h1>
                            </div>

                            <Table data={w.data}/>
                        </>
                    )}

                    {w.type === 'chart' && (
                        <>
                            <div className="widget-header-left">
                                <div className="advisor">Rob Schultz Craig Steinhauer</div>
                                <div className="structure">JPM Max Growth (35%) / Blackrock RFI (40%) / Julex Capital
                                    (25%)
                                </div>
                                <h1>{w.title} <span className="continued">— continued</span></h1>
                            </div>
                            <div className="widget-header-right">
                                <div className="client">Prepared For Joe W. Smith</div>
                                <div className="dates">October 2017 - September 2020</div>
                                <h1>3 Years</h1>
                            </div>
                            <Chart/>
                        </>
                    )}

                </article>

            ))
        }
    </section>
);
