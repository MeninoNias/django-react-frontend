import React from 'react';
import ListComponent from './ListComponent';

export default class UserComponent extends React.Component {

    state = {
        lists: null, loading: true
    }

    async componentDidMount(){
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.state({lists:data, loading:false})    
    }

    render(){
        return (
            <div>
                <ListComponent listname= { 'Lista Teste 01' }/>
                <ListComponent listname= { 'Lista Teste 02' }/>
            </div>
        )
    } 
    
}