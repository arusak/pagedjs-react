import React from 'react';
import {widgets} from '../generate-data.js';

export const Content = () => (<section className="content-page">
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
                        <table>
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {w.data.map(data => (<tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.text}</td>
                                <td>{data.value}</td>
                            </tr>))}
                            </tbody>
                        </table>
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
                        <figure>
                            <svg className="chart" width="820" height="350" aria-labelledby="title desc" role="img">
                                <title id="title">A bar chart showing information</title>
                                <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc>
                                <g className="bar">
                                    <rect width="40" height="19"></rect>
                                    <text x="45" y="9.5" dy=".35em">4 apples</text>
                                </g>
                                <g className="bar">
                                    <rect width="80" height="19" y="20"></rect>
                                    <text x="85" y="28" dy=".35em">8 bananas</text>
                                </g>
                                <g className="bar">
                                    <rect width="150" height="19" y="40"></rect>
                                    <text x="150" y="48" dy=".35em">15 kiwis</text>
                                </g>
                                <g className="bar">
                                    <rect width="160" height="19" y="60"></rect>
                                    <text x="161" y="68" dy=".35em">16 oranges</text>
                                </g>
                                <g className="bar">
                                    <rect width="230" height="19" y="80"></rect>
                                    <text x="235" y="88" dy=".35em">23 lemons</text>
                                </g>
                            </svg>
                        </figure>
                    </>
                )}

            </article>

        ))
    }
</section>);
