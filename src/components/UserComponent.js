import React from 'react';
import ListComponent from './ListComponent';

export default function UserComponent() {

    return (
        <div>
            <ListComponent listname= { 'Lista Teste 01' }/>
            <ListComponent listname= { 'Lista Teste 02' }/>
        </div>
    )
    
}