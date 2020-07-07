import React from 'react';

import ItemComponent from './ItemComponent'


export default function ListComponent(props){
    return (
        <div>
            <h2>
                { props.listname }
            </h2>
            <ul>
                <ItemComponent name={'Ovo'}/>
                <ItemComponent name={'Leite'}/>
            </ul>
        </div>
    )
}