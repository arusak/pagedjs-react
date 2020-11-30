import React from 'react';

export const Chart = () =>
    <svg
        className="chart"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="320"
        baseProfile="full"
    >
        <defs>
            <clipPath id="zinoui-1">
                <path fill="none" d="M53 32H530V288H53z"/>
            </clipPath>
        </defs>
        <path fill="#FFF" d="M0 0H530V320H0z"/>
        <g
            fill="none"
            stroke="#ccc"
            strokeDasharray="5,2"
            className="zui-chart-grid"
            shapeRendering="crispEdges"
        >
            <path d="M53 32L53 288"/>
            <path d="M132.5 32L132.5 288"/>
            <path d="M212 32L212 288"/>
            <path d="M291.5 32L291.5 288"/>
            <path d="M371 32L371 288"/>
            <path d="M450.5 32L450.5 288"/>
            <path d="M530 32L530 288"/>
            <path d="M53 32L530 32"/>
            <path d="M53 288L530 288"/>
            <path d="M53 202.67L530 202.67"/>
            <path d="M53 117.33L530 117.33"/>
            <path d="M53 32L530 32"/>
        </g>
        <g
            fill="none"
            stroke="#444"
            className="zui-chart-axis-x"
            shapeRendering="crispEdges"
        >
            <path d="M53 289L53 293"/>
            <path d="M132.5 289L132.5 293"/>
            <path d="M212 289L212 293"/>
            <path d="M291.5 289L291.5 293"/>
            <path d="M371 289L371 293"/>
            <path d="M450.5 289L450.5 293"/>
            <path d="M530 289L530 293"/>
        </g>
        <g
            fill="none"
            stroke="#444"
            className="zui-chart-axis-y"
            shapeRendering="crispEdges"
        >
            <path d="M49 288L53 288"/>
            <path d="M49 202.67L53 202.67"/>
            <path d="M49 117.33L53 117.33"/>
            <path d="M49 32L53 32"/>
        </g>
        <g
            fill="#444"
            className="zui-chart-labels zui-chart-labels-y"
            fontFamily="Arial"
            fontSize="12"
            textAnchor="end"
        >
            <text x="43" y="288">
                <tspan alignmentBaseline="middle">3</tspan>
            </text>
            <text x="43" y="202.67">
                <tspan alignmentBaseline="middle">4</tspan>
            </text>
            <text x="43" y="117.33">
                <tspan alignmentBaseline="middle">5</tspan>
            </text>
            <text x="43" y="32">
                <tspan alignmentBaseline="middle">6</tspan>
            </text>
        </g>
        <g
            fill="#444"
            className="zui-chart-labels zui-chart-labels-x"
            fontFamily="Arial"
            fontSize="12"
            textAnchor="middle"
        >
            <text x="92.75" y="308">
                2008
            </text>
            <text x="172.25" y="308">
                2009
            </text>
            <text x="251.75" y="308">
                2010
            </text>
            <text x="331.25" y="308">
                2011
            </text>
            <text x="410.75" y="308">
                2012
            </text>
            <text x="490.25" y="308">
                2013
            </text>
        </g>
        <path
            fill="none"
            stroke="#444"
            d="M53 32L53 288 530 288"
            shapeRendering="crispEdges"
            className="0"
        />
        <g
            stroke="#DC3912"
            strokeWidth="2"
            className="zui-chart-canvas"
            clipPath="url(#zinoui-1)"
        >
            <path
                fill="none"
                strokeDasharray="3000,3000"
                d="M92.75 288l79.5-170.67 79.5 85.34 79.5-85.34L410.75 32l79.5 85.33"
            />
            <circle cx="92.75" cy="288" r="4" fill="#FFF"/>
            <circle cx="172.25" cy="117.33" r="4" fill="#FFF"/>
            <circle cx="251.75" cy="202.67" r="4" fill="#FFF"/>
            <circle cx="331.25" cy="117.33" r="4" fill="#FFF"/>
            <circle cx="410.75" cy="32" r="4" fill="#FFF"/>
            <circle cx="490.25" cy="117.33" r="4" fill="#FFF"/>
        </g>
    </svg>;
