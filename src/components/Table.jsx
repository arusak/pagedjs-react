import React from 'react';

export const Table = props =>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>value</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map(data => (<tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.text}</td>
            <td>{data.value}</td>
        </tr>))}
        </tbody>
    </table>;
