import React from 'react';

import ItemComponent from './ItemComponent'


export default function ListComponent(props){
    const itens = props.itens;

    return (
        <div>
            <h2>
                { props.listname }
            </h2>
            <ul>
                {itens.map( item => <ItemComponent key={item.id} name={item.name} status={item.done}/>)}
            </ul>
        </div>
    )
}